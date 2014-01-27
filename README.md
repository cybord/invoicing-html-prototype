## Building a HTML prototype of an invoicing app

We are going to be building an HTML prototype of an invoicing app. This is the document that describes what the application should do aka the spec.

### Functionality of the application
- The user should be able to log into a secure environment
- Provide an overview of all invoices for a single company
  - Which invoices have been paid
  - Which invoices are late
- Provide a detail view of every invoice
  - The detail view contains detailed info about the invoice
  - The user can change details about the invoice
  - An invoice can be duplicated to provide the base for a new invoice
- Create new invoices
- A settings page
  - The settings page allows the user to enter their own company data (displayed as the “sender” on invoices
  - A settings page allows the user to modify the template used for invoicing

### Invoice - Object data
The central object of the application is an **invoice.** Each invoice object contains:
- (INT) Invoice ID
- (INT) Invoice number
- (DATE) Invoice sent date
- (DATE) Invoice to be paid by date
- (BOOLEAN) Is this a refund?
- (BOOLEAN) Is this an advance?
- (ARRAY) Invoice items
  - (INT) Default VAT
  - (INT) Custom VAT
  - (STRING) Description
  - (INT) Hours (if applicable)
  - (INT) Subtotal
- (INT) Total (derived from invoice items)
- (STRING) Status: paid
- (DATE) Date created
- (DATE) Date modified

### Company - Object data
A **company** is another object. Any invoice is tied to two companies, the sender and receiver. For the v1 of this application we are focussing on **outgoing invoices only**. The sender is thus a static set of data. The receiver object is called **client** in the user interface.
Both senders and receivers follow have the same data model:
- (INT) Company ID
- (STRING) Company Name
- Company Address
  - (STRING) Company street name
  - (STRING) Company street number
  - (STRING) Company additional address info (e.g. post box)
  - (STRING) Company postal code
  - (STRING) Company city
  - (STRING) Company country
  - (STRING) Company state/province
- (STRING) Company VAT No.
- (DATE) Date created
- (DATE) Date modified

### Ideas for future functionality
- Display overview graphs of invoice data: how many invoices have been paid
- Filter the invoices on specific companies
- Allow the user to enter a pattern for invoice numbers
