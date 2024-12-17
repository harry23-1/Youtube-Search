import { youTube } from "../../support/SearchYoutube/search_youtube.po";


describe('YouTube Video Search and Navigation Test', () => {
  beforeEach(() => {
    // Ignore uncaught exceptions to avoid test interruptions
    Cypress.on('uncaught:exception', () => false);
  });

  it('Search for a video and assert the title on the video page', () => {
    youTube.visitHomePage(); 
    youTube.searchVideo('Itonics'); 

    youTube.clickFirstVideo(); 
    youTube.verifyVideoTitle(); 
  });

  it('Click a random video and assert the title', () => {
    youTube.visitHomePage(); 
    youTube.searchVideo('Itonics'); 

    youTube.clickRandomVideo();
    youTube.verifyRandomVideoTitle();
  });
});
