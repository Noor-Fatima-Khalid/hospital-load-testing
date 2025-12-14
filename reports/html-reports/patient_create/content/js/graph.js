/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 200.0, "minX": 0.0, "maxY": 426.0, "series": [{"data": [[0.0, 200.0], [0.1, 200.0], [0.2, 200.0], [0.3, 200.0], [0.4, 200.0], [0.5, 200.0], [0.6, 200.0], [0.7, 200.0], [0.8, 200.0], [0.9, 200.0], [1.0, 200.0], [1.1, 200.0], [1.2, 200.0], [1.3, 200.0], [1.4, 200.0], [1.5, 200.0], [1.6, 200.0], [1.7, 200.0], [1.8, 200.0], [1.9, 200.0], [2.0, 252.0], [2.1, 252.0], [2.2, 252.0], [2.3, 252.0], [2.4, 252.0], [2.5, 252.0], [2.6, 252.0], [2.7, 252.0], [2.8, 252.0], [2.9, 252.0], [3.0, 252.0], [3.1, 252.0], [3.2, 252.0], [3.3, 252.0], [3.4, 252.0], [3.5, 252.0], [3.6, 252.0], [3.7, 252.0], [3.8, 252.0], [3.9, 252.0], [4.0, 398.0], [4.1, 398.0], [4.2, 398.0], [4.3, 398.0], [4.4, 398.0], [4.5, 398.0], [4.6, 398.0], [4.7, 398.0], [4.8, 398.0], [4.9, 398.0], [5.0, 398.0], [5.1, 398.0], [5.2, 398.0], [5.3, 398.0], [5.4, 398.0], [5.5, 398.0], [5.6, 398.0], [5.7, 398.0], [5.8, 398.0], [5.9, 398.0], [6.0, 398.0], [6.1, 398.0], [6.2, 398.0], [6.3, 398.0], [6.4, 398.0], [6.5, 398.0], [6.6, 398.0], [6.7, 398.0], [6.8, 398.0], [6.9, 398.0], [7.0, 398.0], [7.1, 398.0], [7.2, 398.0], [7.3, 398.0], [7.4, 398.0], [7.5, 398.0], [7.6, 398.0], [7.7, 398.0], [7.8, 398.0], [7.9, 398.0], [8.0, 398.0], [8.1, 398.0], [8.2, 398.0], [8.3, 398.0], [8.4, 398.0], [8.5, 398.0], [8.6, 398.0], [8.7, 398.0], [8.8, 398.0], [8.9, 398.0], [9.0, 398.0], [9.1, 398.0], [9.2, 398.0], [9.3, 398.0], [9.4, 398.0], [9.5, 398.0], [9.6, 398.0], [9.7, 398.0], [9.8, 398.0], [9.9, 398.0], [10.0, 398.0], [10.1, 398.0], [10.2, 398.0], [10.3, 398.0], [10.4, 398.0], [10.5, 398.0], [10.6, 398.0], [10.7, 398.0], [10.8, 398.0], [10.9, 398.0], [11.0, 398.0], [11.1, 398.0], [11.2, 398.0], [11.3, 398.0], [11.4, 398.0], [11.5, 398.0], [11.6, 398.0], [11.7, 398.0], [11.8, 398.0], [11.9, 398.0], [12.0, 401.0], [12.1, 401.0], [12.2, 401.0], [12.3, 401.0], [12.4, 401.0], [12.5, 401.0], [12.6, 401.0], [12.7, 401.0], [12.8, 401.0], [12.9, 401.0], [13.0, 401.0], [13.1, 401.0], [13.2, 401.0], [13.3, 401.0], [13.4, 401.0], [13.5, 401.0], [13.6, 401.0], [13.7, 401.0], [13.8, 401.0], [13.9, 401.0], [14.0, 401.0], [14.1, 401.0], [14.2, 401.0], [14.3, 401.0], [14.4, 401.0], [14.5, 401.0], [14.6, 401.0], [14.7, 401.0], [14.8, 401.0], [14.9, 401.0], [15.0, 401.0], [15.1, 401.0], [15.2, 401.0], [15.3, 401.0], [15.4, 401.0], [15.5, 401.0], [15.6, 401.0], [15.7, 401.0], [15.8, 401.0], [15.9, 401.0], [16.0, 401.0], [16.1, 401.0], [16.2, 401.0], [16.3, 401.0], [16.4, 401.0], [16.5, 401.0], [16.6, 401.0], [16.7, 401.0], [16.8, 401.0], [16.9, 401.0], [17.0, 401.0], [17.1, 401.0], [17.2, 401.0], [17.3, 401.0], [17.4, 401.0], [17.5, 401.0], [17.6, 401.0], [17.7, 401.0], [17.8, 401.0], [17.9, 401.0], [18.0, 401.0], [18.1, 401.0], [18.2, 401.0], [18.3, 401.0], [18.4, 401.0], [18.5, 401.0], [18.6, 401.0], [18.7, 401.0], [18.8, 401.0], [18.9, 401.0], [19.0, 401.0], [19.1, 401.0], [19.2, 401.0], [19.3, 401.0], [19.4, 401.0], [19.5, 401.0], [19.6, 401.0], [19.7, 401.0], [19.8, 401.0], [19.9, 401.0], [20.0, 401.0], [20.1, 401.0], [20.2, 401.0], [20.3, 401.0], [20.4, 401.0], [20.5, 401.0], [20.6, 401.0], [20.7, 401.0], [20.8, 401.0], [20.9, 401.0], [21.0, 401.0], [21.1, 401.0], [21.2, 401.0], [21.3, 401.0], [21.4, 401.0], [21.5, 401.0], [21.6, 401.0], [21.7, 401.0], [21.8, 401.0], [21.9, 401.0], [22.0, 402.0], [22.1, 402.0], [22.2, 402.0], [22.3, 402.0], [22.4, 402.0], [22.5, 402.0], [22.6, 402.0], [22.7, 402.0], [22.8, 402.0], [22.9, 402.0], [23.0, 402.0], [23.1, 402.0], [23.2, 402.0], [23.3, 402.0], [23.4, 402.0], [23.5, 402.0], [23.6, 402.0], [23.7, 402.0], [23.8, 402.0], [23.9, 402.0], [24.0, 402.0], [24.1, 402.0], [24.2, 402.0], [24.3, 402.0], [24.4, 402.0], [24.5, 402.0], [24.6, 402.0], [24.7, 402.0], [24.8, 402.0], [24.9, 402.0], [25.0, 402.0], [25.1, 402.0], [25.2, 402.0], [25.3, 402.0], [25.4, 402.0], [25.5, 402.0], [25.6, 402.0], [25.7, 402.0], [25.8, 402.0], [25.9, 402.0], [26.0, 402.0], [26.1, 402.0], [26.2, 402.0], [26.3, 402.0], [26.4, 402.0], [26.5, 402.0], [26.6, 402.0], [26.7, 402.0], [26.8, 402.0], [26.9, 402.0], [27.0, 402.0], [27.1, 402.0], [27.2, 402.0], [27.3, 402.0], [27.4, 402.0], [27.5, 402.0], [27.6, 402.0], [27.7, 402.0], [27.8, 402.0], [27.9, 402.0], [28.0, 403.0], [28.1, 403.0], [28.2, 403.0], [28.3, 403.0], [28.4, 403.0], [28.5, 403.0], [28.6, 403.0], [28.7, 403.0], [28.8, 403.0], [28.9, 403.0], [29.0, 403.0], [29.1, 403.0], [29.2, 403.0], [29.3, 403.0], [29.4, 403.0], [29.5, 403.0], [29.6, 403.0], [29.7, 403.0], [29.8, 403.0], [29.9, 403.0], [30.0, 403.0], [30.1, 403.0], [30.2, 403.0], [30.3, 403.0], [30.4, 403.0], [30.5, 403.0], [30.6, 403.0], [30.7, 403.0], [30.8, 403.0], [30.9, 403.0], [31.0, 403.0], [31.1, 403.0], [31.2, 403.0], [31.3, 403.0], [31.4, 403.0], [31.5, 403.0], [31.6, 403.0], [31.7, 403.0], [31.8, 403.0], [31.9, 403.0], [32.0, 403.0], [32.1, 403.0], [32.2, 403.0], [32.3, 403.0], [32.4, 403.0], [32.5, 403.0], [32.6, 403.0], [32.7, 403.0], [32.8, 403.0], [32.9, 403.0], [33.0, 403.0], [33.1, 403.0], [33.2, 403.0], [33.3, 403.0], [33.4, 403.0], [33.5, 403.0], [33.6, 403.0], [33.7, 403.0], [33.8, 403.0], [33.9, 403.0], [34.0, 403.0], [34.1, 403.0], [34.2, 403.0], [34.3, 403.0], [34.4, 403.0], [34.5, 403.0], [34.6, 403.0], [34.7, 403.0], [34.8, 403.0], [34.9, 403.0], [35.0, 403.0], [35.1, 403.0], [35.2, 403.0], [35.3, 403.0], [35.4, 403.0], [35.5, 403.0], [35.6, 403.0], [35.7, 403.0], [35.8, 403.0], [35.9, 403.0], [36.0, 403.0], [36.1, 403.0], [36.2, 403.0], [36.3, 403.0], [36.4, 403.0], [36.5, 403.0], [36.6, 403.0], [36.7, 403.0], [36.8, 403.0], [36.9, 403.0], [37.0, 403.0], [37.1, 403.0], [37.2, 403.0], [37.3, 403.0], [37.4, 403.0], [37.5, 403.0], [37.6, 403.0], [37.7, 403.0], [37.8, 403.0], [37.9, 403.0], [38.0, 404.0], [38.1, 404.0], [38.2, 404.0], [38.3, 404.0], [38.4, 404.0], [38.5, 404.0], [38.6, 404.0], [38.7, 404.0], [38.8, 404.0], [38.9, 404.0], [39.0, 404.0], [39.1, 404.0], [39.2, 404.0], [39.3, 404.0], [39.4, 404.0], [39.5, 404.0], [39.6, 404.0], [39.7, 404.0], [39.8, 404.0], [39.9, 404.0], [40.0, 404.0], [40.1, 404.0], [40.2, 404.0], [40.3, 404.0], [40.4, 404.0], [40.5, 404.0], [40.6, 404.0], [40.7, 404.0], [40.8, 404.0], [40.9, 404.0], [41.0, 404.0], [41.1, 404.0], [41.2, 404.0], [41.3, 404.0], [41.4, 404.0], [41.5, 404.0], [41.6, 404.0], [41.7, 404.0], [41.8, 404.0], [41.9, 404.0], [42.0, 405.0], [42.1, 405.0], [42.2, 405.0], [42.3, 405.0], [42.4, 405.0], [42.5, 405.0], [42.6, 405.0], [42.7, 405.0], [42.8, 405.0], [42.9, 405.0], [43.0, 405.0], [43.1, 405.0], [43.2, 405.0], [43.3, 405.0], [43.4, 405.0], [43.5, 405.0], [43.6, 405.0], [43.7, 405.0], [43.8, 405.0], [43.9, 405.0], [44.0, 405.0], [44.1, 405.0], [44.2, 405.0], [44.3, 405.0], [44.4, 405.0], [44.5, 405.0], [44.6, 405.0], [44.7, 405.0], [44.8, 405.0], [44.9, 405.0], [45.0, 405.0], [45.1, 405.0], [45.2, 405.0], [45.3, 405.0], [45.4, 405.0], [45.5, 405.0], [45.6, 405.0], [45.7, 405.0], [45.8, 405.0], [45.9, 405.0], [46.0, 405.0], [46.1, 405.0], [46.2, 405.0], [46.3, 405.0], [46.4, 405.0], [46.5, 405.0], [46.6, 405.0], [46.7, 405.0], [46.8, 405.0], [46.9, 405.0], [47.0, 405.0], [47.1, 405.0], [47.2, 405.0], [47.3, 405.0], [47.4, 405.0], [47.5, 405.0], [47.6, 405.0], [47.7, 405.0], [47.8, 405.0], [47.9, 405.0], [48.0, 406.0], [48.1, 406.0], [48.2, 406.0], [48.3, 406.0], [48.4, 406.0], [48.5, 406.0], [48.6, 406.0], [48.7, 406.0], [48.8, 406.0], [48.9, 406.0], [49.0, 406.0], [49.1, 406.0], [49.2, 406.0], [49.3, 406.0], [49.4, 406.0], [49.5, 406.0], [49.6, 406.0], [49.7, 406.0], [49.8, 406.0], [49.9, 406.0], [50.0, 406.0], [50.1, 406.0], [50.2, 406.0], [50.3, 406.0], [50.4, 406.0], [50.5, 406.0], [50.6, 406.0], [50.7, 406.0], [50.8, 406.0], [50.9, 406.0], [51.0, 406.0], [51.1, 406.0], [51.2, 406.0], [51.3, 406.0], [51.4, 406.0], [51.5, 406.0], [51.6, 406.0], [51.7, 406.0], [51.8, 406.0], [51.9, 406.0], [52.0, 407.0], [52.1, 407.0], [52.2, 407.0], [52.3, 407.0], [52.4, 407.0], [52.5, 407.0], [52.6, 407.0], [52.7, 407.0], [52.8, 407.0], [52.9, 407.0], [53.0, 407.0], [53.1, 407.0], [53.2, 407.0], [53.3, 407.0], [53.4, 407.0], [53.5, 407.0], [53.6, 407.0], [53.7, 407.0], [53.8, 407.0], [53.9, 407.0], [54.0, 407.0], [54.1, 407.0], [54.2, 407.0], [54.3, 407.0], [54.4, 407.0], [54.5, 407.0], [54.6, 407.0], [54.7, 407.0], [54.8, 407.0], [54.9, 407.0], [55.0, 407.0], [55.1, 407.0], [55.2, 407.0], [55.3, 407.0], [55.4, 407.0], [55.5, 407.0], [55.6, 407.0], [55.7, 407.0], [55.8, 407.0], [55.9, 407.0], [56.0, 408.0], [56.1, 408.0], [56.2, 408.0], [56.3, 408.0], [56.4, 408.0], [56.5, 408.0], [56.6, 408.0], [56.7, 408.0], [56.8, 408.0], [56.9, 408.0], [57.0, 408.0], [57.1, 408.0], [57.2, 408.0], [57.3, 408.0], [57.4, 408.0], [57.5, 408.0], [57.6, 408.0], [57.7, 408.0], [57.8, 408.0], [57.9, 408.0], [58.0, 408.0], [58.1, 408.0], [58.2, 408.0], [58.3, 408.0], [58.4, 408.0], [58.5, 408.0], [58.6, 408.0], [58.7, 408.0], [58.8, 408.0], [58.9, 408.0], [59.0, 408.0], [59.1, 408.0], [59.2, 408.0], [59.3, 408.0], [59.4, 408.0], [59.5, 408.0], [59.6, 408.0], [59.7, 408.0], [59.8, 408.0], [59.9, 408.0], [60.0, 409.0], [60.1, 409.0], [60.2, 409.0], [60.3, 409.0], [60.4, 409.0], [60.5, 409.0], [60.6, 409.0], [60.7, 409.0], [60.8, 409.0], [60.9, 409.0], [61.0, 409.0], [61.1, 409.0], [61.2, 409.0], [61.3, 409.0], [61.4, 409.0], [61.5, 409.0], [61.6, 409.0], [61.7, 409.0], [61.8, 409.0], [61.9, 409.0], [62.0, 410.0], [62.1, 410.0], [62.2, 410.0], [62.3, 410.0], [62.4, 410.0], [62.5, 410.0], [62.6, 410.0], [62.7, 410.0], [62.8, 410.0], [62.9, 410.0], [63.0, 410.0], [63.1, 410.0], [63.2, 410.0], [63.3, 410.0], [63.4, 410.0], [63.5, 410.0], [63.6, 410.0], [63.7, 410.0], [63.8, 410.0], [63.9, 410.0], [64.0, 410.0], [64.1, 410.0], [64.2, 410.0], [64.3, 410.0], [64.4, 410.0], [64.5, 410.0], [64.6, 410.0], [64.7, 410.0], [64.8, 410.0], [64.9, 410.0], [65.0, 410.0], [65.1, 410.0], [65.2, 410.0], [65.3, 410.0], [65.4, 410.0], [65.5, 410.0], [65.6, 410.0], [65.7, 410.0], [65.8, 410.0], [65.9, 410.0], [66.0, 411.0], [66.1, 411.0], [66.2, 411.0], [66.3, 411.0], [66.4, 411.0], [66.5, 411.0], [66.6, 411.0], [66.7, 411.0], [66.8, 411.0], [66.9, 411.0], [67.0, 411.0], [67.1, 411.0], [67.2, 411.0], [67.3, 411.0], [67.4, 411.0], [67.5, 411.0], [67.6, 411.0], [67.7, 411.0], [67.8, 411.0], [67.9, 411.0], [68.0, 411.0], [68.1, 411.0], [68.2, 411.0], [68.3, 411.0], [68.4, 411.0], [68.5, 411.0], [68.6, 411.0], [68.7, 411.0], [68.8, 411.0], [68.9, 411.0], [69.0, 411.0], [69.1, 411.0], [69.2, 411.0], [69.3, 411.0], [69.4, 411.0], [69.5, 411.0], [69.6, 411.0], [69.7, 411.0], [69.8, 411.0], [69.9, 411.0], [70.0, 411.0], [70.1, 411.0], [70.2, 411.0], [70.3, 411.0], [70.4, 411.0], [70.5, 411.0], [70.6, 411.0], [70.7, 411.0], [70.8, 411.0], [70.9, 411.0], [71.0, 411.0], [71.1, 411.0], [71.2, 411.0], [71.3, 411.0], [71.4, 411.0], [71.5, 411.0], [71.6, 411.0], [71.7, 411.0], [71.8, 411.0], [71.9, 411.0], [72.0, 412.0], [72.1, 412.0], [72.2, 412.0], [72.3, 412.0], [72.4, 412.0], [72.5, 412.0], [72.6, 412.0], [72.7, 412.0], [72.8, 412.0], [72.9, 412.0], [73.0, 412.0], [73.1, 412.0], [73.2, 412.0], [73.3, 412.0], [73.4, 412.0], [73.5, 412.0], [73.6, 412.0], [73.7, 412.0], [73.8, 412.0], [73.9, 412.0], [74.0, 412.0], [74.1, 412.0], [74.2, 412.0], [74.3, 412.0], [74.4, 412.0], [74.5, 412.0], [74.6, 412.0], [74.7, 412.0], [74.8, 412.0], [74.9, 412.0], [75.0, 412.0], [75.1, 412.0], [75.2, 412.0], [75.3, 412.0], [75.4, 412.0], [75.5, 412.0], [75.6, 412.0], [75.7, 412.0], [75.8, 412.0], [75.9, 412.0], [76.0, 413.0], [76.1, 413.0], [76.2, 413.0], [76.3, 413.0], [76.4, 413.0], [76.5, 413.0], [76.6, 413.0], [76.7, 413.0], [76.8, 413.0], [76.9, 413.0], [77.0, 413.0], [77.1, 413.0], [77.2, 413.0], [77.3, 413.0], [77.4, 413.0], [77.5, 413.0], [77.6, 413.0], [77.7, 413.0], [77.8, 413.0], [77.9, 413.0], [78.0, 413.0], [78.1, 413.0], [78.2, 413.0], [78.3, 413.0], [78.4, 413.0], [78.5, 413.0], [78.6, 413.0], [78.7, 413.0], [78.8, 413.0], [78.9, 413.0], [79.0, 413.0], [79.1, 413.0], [79.2, 413.0], [79.3, 413.0], [79.4, 413.0], [79.5, 413.0], [79.6, 413.0], [79.7, 413.0], [79.8, 413.0], [79.9, 413.0], [80.0, 413.0], [80.1, 413.0], [80.2, 413.0], [80.3, 413.0], [80.4, 413.0], [80.5, 413.0], [80.6, 413.0], [80.7, 413.0], [80.8, 413.0], [80.9, 413.0], [81.0, 413.0], [81.1, 413.0], [81.2, 413.0], [81.3, 413.0], [81.4, 413.0], [81.5, 413.0], [81.6, 413.0], [81.7, 413.0], [81.8, 413.0], [81.9, 413.0], [82.0, 414.0], [82.1, 414.0], [82.2, 414.0], [82.3, 414.0], [82.4, 414.0], [82.5, 414.0], [82.6, 414.0], [82.7, 414.0], [82.8, 414.0], [82.9, 414.0], [83.0, 414.0], [83.1, 414.0], [83.2, 414.0], [83.3, 414.0], [83.4, 414.0], [83.5, 414.0], [83.6, 414.0], [83.7, 414.0], [83.8, 414.0], [83.9, 414.0], [84.0, 416.0], [84.1, 416.0], [84.2, 416.0], [84.3, 416.0], [84.4, 416.0], [84.5, 416.0], [84.6, 416.0], [84.7, 416.0], [84.8, 416.0], [84.9, 416.0], [85.0, 416.0], [85.1, 416.0], [85.2, 416.0], [85.3, 416.0], [85.4, 416.0], [85.5, 416.0], [85.6, 416.0], [85.7, 416.0], [85.8, 416.0], [85.9, 416.0], [86.0, 418.0], [86.1, 418.0], [86.2, 418.0], [86.3, 418.0], [86.4, 418.0], [86.5, 418.0], [86.6, 418.0], [86.7, 418.0], [86.8, 418.0], [86.9, 418.0], [87.0, 418.0], [87.1, 418.0], [87.2, 418.0], [87.3, 418.0], [87.4, 418.0], [87.5, 418.0], [87.6, 418.0], [87.7, 418.0], [87.8, 418.0], [87.9, 418.0], [88.0, 418.0], [88.1, 418.0], [88.2, 418.0], [88.3, 418.0], [88.4, 418.0], [88.5, 418.0], [88.6, 418.0], [88.7, 418.0], [88.8, 418.0], [88.9, 418.0], [89.0, 418.0], [89.1, 418.0], [89.2, 418.0], [89.3, 418.0], [89.4, 418.0], [89.5, 418.0], [89.6, 418.0], [89.7, 418.0], [89.8, 418.0], [89.9, 418.0], [90.0, 418.0], [90.1, 418.0], [90.2, 418.0], [90.3, 418.0], [90.4, 418.0], [90.5, 418.0], [90.6, 418.0], [90.7, 418.0], [90.8, 418.0], [90.9, 418.0], [91.0, 418.0], [91.1, 418.0], [91.2, 418.0], [91.3, 418.0], [91.4, 418.0], [91.5, 418.0], [91.6, 418.0], [91.7, 418.0], [91.8, 418.0], [91.9, 418.0], [92.0, 420.0], [92.1, 420.0], [92.2, 420.0], [92.3, 420.0], [92.4, 420.0], [92.5, 420.0], [92.6, 420.0], [92.7, 420.0], [92.8, 420.0], [92.9, 420.0], [93.0, 420.0], [93.1, 420.0], [93.2, 420.0], [93.3, 420.0], [93.4, 420.0], [93.5, 420.0], [93.6, 420.0], [93.7, 420.0], [93.8, 420.0], [93.9, 420.0], [94.0, 421.0], [94.1, 421.0], [94.2, 421.0], [94.3, 421.0], [94.4, 421.0], [94.5, 421.0], [94.6, 421.0], [94.7, 421.0], [94.8, 421.0], [94.9, 421.0], [95.0, 421.0], [95.1, 421.0], [95.2, 421.0], [95.3, 421.0], [95.4, 421.0], [95.5, 421.0], [95.6, 421.0], [95.7, 421.0], [95.8, 421.0], [95.9, 421.0], [96.0, 426.0], [96.1, 426.0], [96.2, 426.0], [96.3, 426.0], [96.4, 426.0], [96.5, 426.0], [96.6, 426.0], [96.7, 426.0], [96.8, 426.0], [96.9, 426.0], [97.0, 426.0], [97.1, 426.0], [97.2, 426.0], [97.3, 426.0], [97.4, 426.0], [97.5, 426.0], [97.6, 426.0], [97.7, 426.0], [97.8, 426.0], [97.9, 426.0], [98.0, 426.0], [98.1, 426.0], [98.2, 426.0], [98.3, 426.0], [98.4, 426.0], [98.5, 426.0], [98.6, 426.0], [98.7, 426.0], [98.8, 426.0], [98.9, 426.0], [99.0, 426.0], [99.1, 426.0], [99.2, 426.0], [99.3, 426.0], [99.4, 426.0], [99.5, 426.0], [99.6, 426.0], [99.7, 426.0], [99.8, 426.0], [99.9, 426.0]], "isOverall": false, "label": "Patient Create", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 44.0, "series": [{"data": [[300.0, 4.0], [200.0, 2.0], [400.0, 44.0]], "isOverall": false, "label": "Patient Create", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 48.0, "series": [{"data": [[0.0, 48.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.765719E12, "maxY": 1.0, "series": [{"data": [[1.765719E12, 1.0], [1.76571906E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76571906E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 400.74, "minX": 1.0, "maxY": 400.74, "series": [{"data": [[1.0, 400.74]], "isOverall": false, "label": "Patient Create", "isController": false}, {"data": [[1.0, 400.74]], "isOverall": false, "label": "Patient Create-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 113.2, "minX": 1.765719E12, "maxY": 282.71666666666664, "series": [{"data": [[1.765719E12, 211.75], [1.76571906E12, 282.71666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.765719E12, 113.2], [1.76571906E12, 145.51666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76571906E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 393.40909090909093, "minX": 1.765719E12, "maxY": 406.50000000000006, "series": [{"data": [[1.765719E12, 393.40909090909093], [1.76571906E12, 406.50000000000006]], "isOverall": false, "label": "Patient Create", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76571906E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 393.2727272727273, "minX": 1.765719E12, "maxY": 406.4642857142857, "series": [{"data": [[1.765719E12, 393.2727272727273], [1.76571906E12, 406.4642857142857]], "isOverall": false, "label": "Patient Create", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76571906E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.428571428571429, "minX": 1.765719E12, "maxY": 3.6818181818181817, "series": [{"data": [[1.765719E12, 3.6818181818181817], [1.76571906E12, 1.428571428571429]], "isOverall": false, "label": "Patient Create", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76571906E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 398.0, "minX": 1.765719E12, "maxY": 426.0, "series": [{"data": [[1.765719E12, 426.0], [1.76571906E12, 426.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.765719E12, 398.0], [1.76571906E12, 398.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.765719E12, 420.9], [1.76571906E12, 416.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.765719E12, 426.0], [1.76571906E12, 426.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.765719E12, 411.5], [1.76571906E12, 405.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.765719E12, 425.75], [1.76571906E12, 422.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76571906E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 226.0, "minX": 1.0, "maxY": 408.0, "series": [{"data": [[1.0, 405.0], [2.0, 408.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 226.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 226.0, "minX": 1.0, "maxY": 408.0, "series": [{"data": [[1.0, 405.0], [2.0, 408.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 226.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.765719E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.765719E12, 0.36666666666666664], [1.76571906E12, 0.4666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76571906E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.765719E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.765719E12, 0.3333333333333333], [1.76571906E12, 0.4666666666666667]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.765719E12, 0.03333333333333333]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76571906E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.765719E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.765719E12, 0.03333333333333333]], "isOverall": false, "label": "Patient Create-failure", "isController": false}, {"data": [[1.765719E12, 0.3333333333333333], [1.76571906E12, 0.4666666666666667]], "isOverall": false, "label": "Patient Create-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76571906E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.765719E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.765719E12, 0.3333333333333333], [1.76571906E12, 0.4666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.765719E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76571906E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

