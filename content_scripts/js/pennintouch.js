var modalHtmlString = '<div class="modal fade">' +
                          '<div class="modal-dialog">' +
                            '<div class="modal-content">' +
                              '<div class="modal-body">' +
                                '<div id="disqus_thread"></div>' +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                        '</div>';

$modal = $(modalHtmlString);
$('body').append($modal);


// Search for "Course search" in div tag to see if on correct page 
if ($('div.headerRed').text().indexOf("Course search") != -1) {

  // Get table of courses when searching
  var courseTable = $('table.pitDarkDataTable');
  if (courseTable.length) {
    $(courseTable).children().children().first().append('<th style="font-weight: normal;" align="left">PennCourseComments by <a href="http://fabiofleitas.com/">Fabio Fleitas</a></th>');
    var courses = courseTable.children().children().next();
    $(courses).each(function() {
      var courseId = $(this).find('.fastButtonLinkText:first').text();

      // courseId cleanup
      courseId = courseId.replace(/ /g, '');
      courseIdComponents = courseId.split('-');
      courseId = courseIdComponents[0] + '-' + courseIdComponents[1];

      var btnHtml = '<td>' +
                      '<button class="comment-btn fastGreenButton" data-course-id="' + courseId + '">Comments</button>' +
                    '</td>';

      $(this).append($(btnHtml));
    });
  }
}

$('.comment-btn').on('click', function (event) {
  var courseId = $(this).data('course-id');
  DISQUS.reset({
    reload: true,
    config: function () {  
      this.page.identifier = courseId;  
      this.page.url = window.location.href + '#' + courseId;
    }
  });

  $('.modal').modal('show');
});