/// <reference types="cypress" />

describe("Verifying variables,cypress commands and jQuery commands",() => {
    it("Should Navigating to specific product pages  ",() =>{ 

        cy.visit("https://www.automationteststore.com/") 

        // test will fail

        // const makeupLinks = cy.get("a[href*='product/category&path=']").contains("Makeup")        
        // const skinCare = cy.get("a[href*='product/category&path=']").contains("Skincare") 
        // makeupLinks.click()            
        // skinCare.click()
        
         //Test will pass but is not recommended Approach 

        // const makeupLinks = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLinks.click()
        // const skinCare = cy.get("a[href*='product/category&path=']").contains("Skincare")             
        // skinCare.click()

            cy.get("a[href*='product/category&path=']").contains("Makeup").click()
            cy.get("a[href*='product/category&path=']").contains("Skincare").click()  
             
    })
    
        it("Should Navigating to specific product pages  ",() =>{ 
    
            cy.visit("https://www.automationteststore.com/")    
    
            cy.get("a[href*='product/category&path=']").contains("Makeup").click()
            cy.get("h1 .maintext").then(($headerText) => {
                const headerText = $headerText.text()
                cy.log("Found header Text :" + headerText)
                expect(headerText).is.eq('Makeup')
            })  
                
                 
        })
        it.only("Should validates properties of the contact us page  ",() =>{ 
    
            cy.visit("https://www.automationteststore.com/")    
            cy.get("a[href$='contact']").click() 

            // uses cypress commands and chanings 
            cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
            // jQuery Apprach
            cy.contains('#ContactUsFrm','Contact Us Form').then(text =>{
                const firstName = text.find('#field_11').text()
                expect(firstName).to.contain('First name')
            // Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
               // cy.log(fnText)
              })

            })             
         
        })            
          
    })
