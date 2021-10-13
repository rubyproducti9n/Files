jQuery(document).ready(function($) {
    prepareDynamicDates();
    $(".timeago").timeago();

    $("#prog_date").text(jQuery.timeago(new Date()));
    $("#prog_string").text(jQuery.timeago("2008-07-17"));
    $("#prog_element").text(jQuery.timeago("2008-07-20"));
  });