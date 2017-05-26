(function() {
  'use strict';

  describe("displays headlines");
    function LoadHeadlineDoubles() {
      headlinesArray = ["Headline 1", "Headline 2", "Headline 3", "Headline 4", "Headline 5"];
    }
    isEqual('displays correct number of headlines on page',
            document.getElementsByTagName('li').length, 5);
  endDescribe();


   describe("displays headlines");
     // mock the api
     document.getElementsByTagName('li')[0].click();
     isEqual('content of headlines matches that of Guardian website',
             document.getElementsByTagName('ul'));
   endDescribe();


   describe("viewing a note's full text");
     document.getElementById('back-to-all-notes').click();
     isEqual('back-to-notes button returns user to index page',
             'http://localhost:8080/',
             window.location.href);
   endDescribe();

}());
