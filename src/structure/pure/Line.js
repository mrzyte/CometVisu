/* Line.js 
 * 
 * copyright (c) 2010-2016, Christian Mayer and the CometVisu contributers.
 * 
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 3 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA
 *
 * @module Line 
 * @title  CometVisu Line 
 */


/**
 * @author Christian Mayer
 * @since 2012
 */
define( ['_common'], function( design ) {
  "use strict";
  var basicdesign = design.basicdesign;
  
  design.basicdesign.addCreator('line', {
  create:     function( element, path, flavour, type ) {
    var 
      $e = $(element),
      classes = basicdesign.setWidgetLayout( $e, path ),
      ret_val = '<hr ' + (classes ? 'class="'+classes+'"' : '') + '/>';
    templateEngine.widgetDataInsert( path, {
      path: path
    });
    return ret_val;
  }
});

}); // end define