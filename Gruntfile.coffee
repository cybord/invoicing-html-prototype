###
  Grunt workflow
###

mountFolder = (connect, dir) ->
    return connect.static(require('path').resolve(dir))

module.exports = (grunt) ->
    @loadNpmTasks('grunt-contrib-clean')
    @loadNpmTasks('grunt-contrib-sass')
    @loadNpmTasks('grunt-contrib-connect')
    @loadNpmTasks('grunt-contrib-copy')
    @loadNpmTasks('grunt-contrib-watch')
    @loadNpmTasks('grunt-jekyll')
    @loadNpmTasks('grunt-open')

    jekyllMask = '{*/,}{*/,}{*/,}*{html,js,png,jpg,jpeg}'

    @initConfig
        clean:
            dist: ['_site', '.tmp']

        doWatch:
            options:
                livereload: 35728
                nospawn: true
            jekyll:
                files: [jekyllMask, '!_site/' + jekyllMask]
                tasks: ['jekyll', 'copy']
            sass:
                files: ['_scss/{*/,}{*/,}*.scss']
                tasks: ['sass:dist', 'copy']

        # Copy the fonts and css in place, because Jekyll deletes them if we
        # generate in the output folder directly.
        copy:
            all:
                files: [
                    expand: true
                    dot: true
                    cwd: '.tmp/'
                    dest: '_site/'
                    src: '*/*'
                ]

        sass:
            dist:
                options:
                    style: 'expanded'
                    cacheLocation: '.tmp/css/'
                files:
                    '.tmp/css/application.css': '_scss/application.scss'

        jekyll:
            dist:
                options:
                    dest: '_site'

        connect:
            livereload:
                options:
                    port: 4200
                    hostname: '0.0.0.0'
                    middleware: (connect) ->
                        return [
                            require('connect-livereload')({ port: 35728 })
                            mountFolder(connect, '_site')
                        ]

        open:
            server:
                url: 'http://localhost:4200'

    @registerMultiTask 'bootstrapcopy', () ->
        @files.forEach (pair) ->
            src = pair.src[0]
            dest = pair.dest
            if grunt.file.exists(dest)
                grunt.file.copy(src, dest)

    @renameTask 'watch', 'doWatch'

    @registerTask('watch', ['connect', 'build', 'open', 'doWatch'])
    @registerTask('build', ['clean', 'jekyll', 'sass', 'copy'])
    @registerTask('default', ['build'])