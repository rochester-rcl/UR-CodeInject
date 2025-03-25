# purpose
This project is used to add customizations and reskinning of the ArchivesSpace application for use by UR.
# Changes
Notable changes include:

Changing error messages for invalid searches
Changing text in a variety of places throughout the application
adding a new "Contact" button with a dropdown menu to the blue main menu
Adding a yellow navbar to link between the various libraries
Adding additional styling to the printPDF on the PUI side
Rearranging the order of content in finding aids

# Usage of Inject functionality
To add js/html/css to the header of every page on the platform, simply place the file in the "public/inject" folder.

# Archivesspace plugin development paradigm 
Archivesspace is written in Ruby on Rails. Rails integrates "views" into the application. These are files ending in .erb. Every change you wish to make is an override to a specific view. Pages are built up as groups of views laid out in an order dictated by the archivesspace application. So the order of operations is, find the associated view, copy paste that view into a file, edit the view appropriately, then save the file in the same location within the directory structure of this plugin as the file appears in the base archivesspace directory tree.
Archivesspace's sourcecode can be found at https://github.com/archivesspace/archivesspace

Also see
https://docs.archivesspace.org/development/dev/#_top
