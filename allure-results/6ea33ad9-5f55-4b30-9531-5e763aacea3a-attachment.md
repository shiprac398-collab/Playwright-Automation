# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tcCommon.spec.js >> tc common test >> login@sanity
- Location: tests\tcCommon.spec.js:35:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@value="Log In"]')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - link:
        - /url: admin.htm
        - img [ref=f1e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=f1e5] [cursor=pointer]
      - paragraph [ref=f1e6]: Experience the difference
    - generic [ref=f1e7]:
      - list [ref=f1e8]:
        - listitem [ref=f1e9]: Solutions
        - listitem [ref=f1e10]:
          - link "About Us" [ref=f1e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f1e12]:
          - link "Services" [ref=f1e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=f1e14]:
          - link "Products" [ref=f1e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=f1e16]:
          - link "Locations" [ref=f1e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=f1e18]:
          - link "Admin Page" [ref=f1e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=f1e20]:
        - listitem [ref=f1e21]:
          - link "home" [ref=f1e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=f1e23]:
          - link "about" [ref=f1e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f1e25]:
          - link "contact" [ref=f1e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=f1e27]:
      - generic [ref=f1e28]:
        - paragraph [ref=f1e29]: Welcome John Smith
        - heading "Account Services" [level=2] [ref=f1e30]
        - list [ref=f1e31]:
          - listitem [ref=f1e32]:
            - link "Open New Account" [ref=f1e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=f1e34]:
            - link "Accounts Overview" [ref=f1e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=f1e36]:
            - link "Transfer Funds" [ref=f1e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=f1e38]:
            - link "Bill Pay" [ref=f1e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=f1e40]:
            - link "Find Transactions" [ref=f1e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=f1e42]:
            - link "Update Contact Info" [ref=f1e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=f1e44]:
            - link "Request Loan" [ref=f1e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=f1e46]:
            - link "Log Out" [ref=f1e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=f1e50]:
        - heading "Accounts Overview" [level=1] [ref=f1e51]
        - table [ref=f1e52]:
          - rowgroup [ref=f1e53]:
            - row [ref=f1e54]:
              - columnheader "Account" [ref=f1e55]
              - columnheader "Balance*" [ref=f1e56]
              - columnheader "Available Amount" [ref=f1e57]
          - rowgroup [ref=f1e58]:
            - row [ref=f1e59]:
              - cell [ref=f1e60]:
                - link "12345" [ref=f1e61] [cursor=pointer]:
                  - /url: activity.htm?id=12345
              - cell "-$2406.00" [ref=f1e62]
              - cell "$0.00" [ref=f1e63]
            - row [ref=f1e64]:
              - cell [ref=f1e65]:
                - link "12456" [ref=f1e66] [cursor=pointer]:
                  - /url: activity.htm?id=12456
              - cell "$16.45" [ref=f1e67]
              - cell "$16.45" [ref=f1e68]
            - row [ref=f1e69]:
              - cell [ref=f1e70]:
                - link "12567" [ref=f1e71] [cursor=pointer]:
                  - /url: activity.htm?id=12567
              - cell "$100.00" [ref=f1e72]
              - cell "$100.00" [ref=f1e73]
            - row [ref=f1e74]:
              - cell [ref=f1e75]:
                - link "12678" [ref=f1e76] [cursor=pointer]:
                  - /url: activity.htm?id=12678
              - cell "-$100.00" [ref=f1e77]
              - cell "$0.00" [ref=f1e78]
            - row [ref=f1e79]:
              - cell [ref=f1e80]:
                - link "12789" [ref=f1e81] [cursor=pointer]:
                  - /url: activity.htm?id=12789
              - cell "$100.00" [ref=f1e82]
              - cell "$100.00" [ref=f1e83]
            - row [ref=f1e84]:
              - cell [ref=f1e85]:
                - link "12900" [ref=f1e86] [cursor=pointer]:
                  - /url: activity.htm?id=12900
              - cell "$0.00" [ref=f1e87]
              - cell "$0.00" [ref=f1e88]
            - row [ref=f1e89]:
              - cell [ref=f1e90]:
                - link "13011" [ref=f1e91] [cursor=pointer]:
                  - /url: activity.htm?id=13011
              - cell "$100.00" [ref=f1e92]
              - cell "$100.00" [ref=f1e93]
            - row [ref=f1e94]:
              - cell [ref=f1e95]:
                - link "13122" [ref=f1e96] [cursor=pointer]:
                  - /url: activity.htm?id=13122
              - cell "$1100.00" [ref=f1e97]
              - cell "$1100.00" [ref=f1e98]
            - row [ref=f1e99]:
              - cell [ref=f1e100]:
                - link "13233" [ref=f1e101] [cursor=pointer]:
                  - /url: activity.htm?id=13233
              - cell "$100.00" [ref=f1e102]
              - cell "$100.00" [ref=f1e103]
            - row [ref=f1e104]:
              - cell [ref=f1e105]:
                - link "13344" [ref=f1e106] [cursor=pointer]:
                  - /url: activity.htm?id=13344
              - cell "$1231.10" [ref=f1e107]
              - cell "$1231.10" [ref=f1e108]
            - row [ref=f1e109]:
              - cell [ref=f1e110]:
                - link "16008" [ref=f1e111] [cursor=pointer]:
                  - /url: activity.htm?id=16008
              - cell "$100.00" [ref=f1e112]
              - cell "$100.00" [ref=f1e113]
            - row [ref=f1e114]:
              - cell [ref=f1e115]:
                - link "54321" [ref=f1e116] [cursor=pointer]:
                  - /url: activity.htm?id=54321
              - cell "$1351.12" [ref=f1e117]
              - cell "$1351.12" [ref=f1e118]
            - row [ref=f1e119]:
              - cell "Total" [ref=f1e120]
              - cell "$1692.67" [ref=f1e121]
              - cell [ref=f1e122]
          - rowgroup [ref=f1e123]:
            - row [ref=f1e124]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=f1e125]
  - generic [ref=f1e127]:
    - list [ref=f1e128]:
      - listitem [ref=f1e129]:
        - link "Home" [ref=f1e130] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=f1e131]:
        - link "About Us" [ref=f1e132] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=f1e133]:
        - link "Services" [ref=f1e134] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=f1e135]:
        - link "Products" [ref=f1e136] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=f1e137]:
        - link "Locations" [ref=f1e138] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=f1e139]:
        - link "Site Map" [ref=f1e140] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=f1e141]:
        - link "Contact Us" [ref=f1e142] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=f1e143]: © Parasoft. All rights reserved.
    - list [ref=f1e144]:
      - listitem [ref=f1e145]: "Visit us at:"
      - listitem [ref=f1e146]:
        - link "www.parasoft.com" [ref=f1e147] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | export class LoginPage
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page
  6  |         this.username=page.locator('//input[@name="username"]')
  7  |         this.password=page.locator('//input[@name="password"]')
  8  |         this.loginbutton=page.locator('//input[@value="Log In"]')
  9  |     }
  10 |     async clickToApplication(username,password)
  11 |    
  12 |     {
  13 |       await this.username.fill(username)
  14 |       await this.password.fill(password)
  15 |       await this.loginbutton.click()
  16 |     }
  17 | 
  18 |     async clickOnloginButton()
  19 |    
  20 |     {
> 21 |       await this.loginbutton.click()
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |     }
  23 | 
  24 | }
```