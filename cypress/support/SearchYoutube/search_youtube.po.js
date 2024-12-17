
class YouTube {
    visitHomePage() {
      cy.visit('https://www.youtube.com');
    }
  
    searchVideo(query) {
      cy.get('input[name="search_query"]', { timeout: 10000 })
      .first()
        .should('be.visible')
        .type(`${query}{enter}`);
    }
  
    clickFirstVideo() {
      cy.get('ytd-video-renderer', { timeout: 10000 })
        .first()
        .find('a#video-title')
        .should('be.visible')
        .then(($el) => {
          const videoTitle = $el.text().trim(); // Get video title
          cy.wrap(videoTitle).as('clickedVideoTitle'); // Save title for later assertion
          $el[0].click();
        });
    }
  
    verifyVideoTitle() {
        cy.url().should('include', '/watch'); // Confirm video page loaded
      
        
      }
      
  
    clickRandomVideo() {
      
        cy.get(':nth-child(1) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image').click({force:true})
    }
  
    verifyRandomVideoTitle() {
      cy.get('h1.title.style-scope.ytd-video-primary-info-renderer', { timeout: 20000 })
        .should('be.visible')
        .invoke('text')
        .then((actualTitle) => {
          cy.get('@randomClickedTitle').then((expectedTitle) => {
            expect(actualTitle.trim()).to.eq(expectedTitle);
          });
        });
    }
  }
  
  export const youTube = new YouTube();
  