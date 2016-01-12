<?php 
// Save as CSV
  // output headers so that the file is downloaded rather than displayed
  header('Content-Type: text/csv; charset=utf-8');
  header('Content-Disposition: attachment; filename=archivoDeApuestas.csv');

  // create a file pointer connected to the output stream
  $output = fopen('php://output', 'w');

  // output the column headings
  fputcsv($output, array('ID', 'fullname', 'email', 'groupAfirst', 'groupAsecond', 'groupBfirst', 'groupBsecond', 'groupCfirst', 'groupCsecond', 'groupDfirst', 'groupDsecond', 'groupEfirst', 'groupEsecond', 'groupFfirst', 'groupFsecond', 'groupGfirst', 'groupGsecond', 'groupHfirst', 'groupHsecond'));

  // fetch the data
  mysql_connect('localhost', 'peripeci_marioor', 'm4r51lt0r');
  mysql_select_db('peripeci_miapuesta');
  $rows = mysql_query('SELECT ID,fullname,email,groupAfirst,groupAsecond,groupBfirst,groupBsecond,groupCfirst,groupCsecond,groupDfirst,groupDsecond,groupEfirst,groupEsecond,groupFfirst,groupFsecond,groupGfirst,groupGsecond,groupHfirst,groupHsecond FROM peripeci_miapuesta.miapuesta_form');

  // loop over the rows, outputting them
  while ($row = mysql_fetch_assoc($rows)) fputcsv($output, $row);

  ?>