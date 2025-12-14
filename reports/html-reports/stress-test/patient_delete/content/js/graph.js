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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 893.0, "series": [{"data": [[0.0, 29.0], [0.1, 29.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 46.0], [0.6, 46.0], [0.7, 46.0], [0.8, 46.0], [0.9, 46.0], [1.0, 96.0], [1.1, 96.0], [1.2, 96.0], [1.3, 96.0], [1.4, 96.0], [1.5, 103.0], [1.6, 103.0], [1.7, 103.0], [1.8, 103.0], [1.9, 103.0], [2.0, 110.0], [2.1, 110.0], [2.2, 110.0], [2.3, 110.0], [2.4, 110.0], [2.5, 110.0], [2.6, 110.0], [2.7, 110.0], [2.8, 110.0], [2.9, 116.0], [3.0, 116.0], [3.1, 116.0], [3.2, 116.0], [3.3, 116.0], [3.4, 129.0], [3.5, 129.0], [3.6, 129.0], [3.7, 129.0], [3.8, 129.0], [3.9, 130.0], [4.0, 130.0], [4.1, 130.0], [4.2, 130.0], [4.3, 130.0], [4.4, 130.0], [4.5, 130.0], [4.6, 130.0], [4.7, 130.0], [4.8, 133.0], [4.9, 133.0], [5.0, 133.0], [5.1, 133.0], [5.2, 133.0], [5.3, 139.0], [5.4, 139.0], [5.5, 139.0], [5.6, 139.0], [5.7, 139.0], [5.8, 143.0], [5.9, 143.0], [6.0, 143.0], [6.1, 143.0], [6.2, 144.0], [6.3, 144.0], [6.4, 144.0], [6.5, 144.0], [6.6, 144.0], [6.7, 145.0], [6.8, 145.0], [6.9, 145.0], [7.0, 145.0], [7.1, 145.0], [7.2, 154.0], [7.3, 154.0], [7.4, 154.0], [7.5, 154.0], [7.6, 154.0], [7.7, 154.0], [7.8, 154.0], [7.9, 154.0], [8.0, 154.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 155.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 155.0], [9.1, 158.0], [9.2, 158.0], [9.3, 158.0], [9.4, 158.0], [9.5, 158.0], [9.6, 159.0], [9.7, 159.0], [9.8, 159.0], [9.9, 159.0], [10.0, 161.0], [10.1, 161.0], [10.2, 161.0], [10.3, 161.0], [10.4, 161.0], [10.5, 165.0], [10.6, 165.0], [10.7, 165.0], [10.8, 165.0], [10.9, 165.0], [11.0, 172.0], [11.1, 172.0], [11.2, 172.0], [11.3, 172.0], [11.4, 172.0], [11.5, 176.0], [11.6, 176.0], [11.7, 176.0], [11.8, 176.0], [11.9, 176.0], [12.0, 177.0], [12.1, 177.0], [12.2, 177.0], [12.3, 177.0], [12.4, 196.0], [12.5, 196.0], [12.6, 196.0], [12.7, 196.0], [12.8, 196.0], [12.9, 223.0], [13.0, 223.0], [13.1, 223.0], [13.2, 223.0], [13.3, 223.0], [13.4, 269.0], [13.5, 269.0], [13.6, 269.0], [13.7, 269.0], [13.8, 269.0], [13.9, 275.0], [14.0, 275.0], [14.1, 275.0], [14.2, 275.0], [14.3, 279.0], [14.4, 279.0], [14.5, 279.0], [14.6, 279.0], [14.7, 279.0], [14.8, 292.0], [14.9, 292.0], [15.0, 292.0], [15.1, 292.0], [15.2, 292.0], [15.3, 306.0], [15.4, 306.0], [15.5, 306.0], [15.6, 306.0], [15.7, 306.0], [15.8, 308.0], [15.9, 308.0], [16.0, 308.0], [16.1, 308.0], [16.2, 326.0], [16.3, 326.0], [16.4, 326.0], [16.5, 326.0], [16.6, 326.0], [16.7, 361.0], [16.8, 361.0], [16.9, 361.0], [17.0, 361.0], [17.1, 361.0], [17.2, 362.0], [17.3, 362.0], [17.4, 362.0], [17.5, 362.0], [17.6, 362.0], [17.7, 371.0], [17.8, 371.0], [17.9, 371.0], [18.0, 371.0], [18.1, 376.0], [18.2, 376.0], [18.3, 376.0], [18.4, 376.0], [18.5, 376.0], [18.6, 378.0], [18.7, 378.0], [18.8, 378.0], [18.9, 378.0], [19.0, 378.0], [19.1, 381.0], [19.2, 381.0], [19.3, 381.0], [19.4, 381.0], [19.5, 381.0], [19.6, 387.0], [19.7, 387.0], [19.8, 387.0], [19.9, 387.0], [20.0, 389.0], [20.1, 389.0], [20.2, 389.0], [20.3, 389.0], [20.4, 389.0], [20.5, 391.0], [20.6, 391.0], [20.7, 391.0], [20.8, 391.0], [20.9, 391.0], [21.0, 397.0], [21.1, 397.0], [21.2, 397.0], [21.3, 397.0], [21.4, 397.0], [21.5, 397.0], [21.6, 397.0], [21.7, 397.0], [21.8, 397.0], [21.9, 397.0], [22.0, 407.0], [22.1, 407.0], [22.2, 407.0], [22.3, 407.0], [22.4, 407.0], [22.5, 407.0], [22.6, 407.0], [22.7, 407.0], [22.8, 407.0], [22.9, 412.0], [23.0, 412.0], [23.1, 412.0], [23.2, 412.0], [23.3, 412.0], [23.4, 412.0], [23.5, 412.0], [23.6, 412.0], [23.7, 412.0], [23.8, 412.0], [23.9, 412.0], [24.0, 412.0], [24.1, 412.0], [24.2, 412.0], [24.3, 417.0], [24.4, 417.0], [24.5, 417.0], [24.6, 417.0], [24.7, 417.0], [24.8, 422.0], [24.9, 422.0], [25.0, 422.0], [25.1, 422.0], [25.2, 422.0], [25.3, 423.0], [25.4, 423.0], [25.5, 423.0], [25.6, 423.0], [25.7, 423.0], [25.8, 424.0], [25.9, 424.0], [26.0, 424.0], [26.1, 424.0], [26.2, 426.0], [26.3, 426.0], [26.4, 426.0], [26.5, 426.0], [26.6, 426.0], [26.7, 427.0], [26.8, 427.0], [26.9, 427.0], [27.0, 427.0], [27.1, 427.0], [27.2, 433.0], [27.3, 433.0], [27.4, 433.0], [27.5, 433.0], [27.6, 433.0], [27.7, 452.0], [27.8, 452.0], [27.9, 452.0], [28.0, 452.0], [28.1, 455.0], [28.2, 455.0], [28.3, 455.0], [28.4, 455.0], [28.5, 455.0], [28.6, 455.0], [28.7, 455.0], [28.8, 455.0], [28.9, 455.0], [29.0, 455.0], [29.1, 469.0], [29.2, 469.0], [29.3, 469.0], [29.4, 469.0], [29.5, 469.0], [29.6, 475.0], [29.7, 475.0], [29.8, 475.0], [29.9, 475.0], [30.0, 483.0], [30.1, 483.0], [30.2, 483.0], [30.3, 483.0], [30.4, 483.0], [30.5, 485.0], [30.6, 485.0], [30.7, 485.0], [30.8, 485.0], [30.9, 485.0], [31.0, 491.0], [31.1, 491.0], [31.2, 491.0], [31.3, 491.0], [31.4, 491.0], [31.5, 492.0], [31.6, 492.0], [31.7, 492.0], [31.8, 492.0], [31.9, 492.0], [32.0, 495.0], [32.1, 495.0], [32.2, 495.0], [32.3, 495.0], [32.4, 496.0], [32.5, 496.0], [32.6, 496.0], [32.7, 496.0], [32.8, 496.0], [32.9, 500.0], [33.0, 500.0], [33.1, 500.0], [33.2, 500.0], [33.3, 500.0], [33.4, 507.0], [33.5, 507.0], [33.6, 507.0], [33.7, 507.0], [33.8, 507.0], [33.9, 507.0], [34.0, 507.0], [34.1, 507.0], [34.2, 507.0], [34.3, 509.0], [34.4, 509.0], [34.5, 509.0], [34.6, 509.0], [34.7, 509.0], [34.8, 513.0], [34.9, 513.0], [35.0, 513.0], [35.1, 513.0], [35.2, 513.0], [35.3, 521.0], [35.4, 521.0], [35.5, 521.0], [35.6, 521.0], [35.7, 521.0], [35.8, 522.0], [35.9, 522.0], [36.0, 522.0], [36.1, 522.0], [36.2, 523.0], [36.3, 523.0], [36.4, 523.0], [36.5, 523.0], [36.6, 523.0], [36.7, 523.0], [36.8, 523.0], [36.9, 523.0], [37.0, 523.0], [37.1, 523.0], [37.2, 524.0], [37.3, 524.0], [37.4, 524.0], [37.5, 524.0], [37.6, 524.0], [37.7, 525.0], [37.8, 525.0], [37.9, 525.0], [38.0, 525.0], [38.1, 526.0], [38.2, 526.0], [38.3, 526.0], [38.4, 526.0], [38.5, 526.0], [38.6, 530.0], [38.7, 530.0], [38.8, 530.0], [38.9, 530.0], [39.0, 530.0], [39.1, 537.0], [39.2, 537.0], [39.3, 537.0], [39.4, 537.0], [39.5, 537.0], [39.6, 538.0], [39.7, 538.0], [39.8, 538.0], [39.9, 538.0], [40.0, 539.0], [40.1, 539.0], [40.2, 539.0], [40.3, 539.0], [40.4, 539.0], [40.5, 539.0], [40.6, 539.0], [40.7, 539.0], [40.8, 539.0], [40.9, 539.0], [41.0, 543.0], [41.1, 543.0], [41.2, 543.0], [41.3, 543.0], [41.4, 543.0], [41.5, 544.0], [41.6, 544.0], [41.7, 544.0], [41.8, 544.0], [41.9, 544.0], [42.0, 544.0], [42.1, 544.0], [42.2, 544.0], [42.3, 544.0], [42.4, 545.0], [42.5, 545.0], [42.6, 545.0], [42.7, 545.0], [42.8, 545.0], [42.9, 556.0], [43.0, 556.0], [43.1, 556.0], [43.2, 556.0], [43.3, 556.0], [43.4, 560.0], [43.5, 560.0], [43.6, 560.0], [43.7, 560.0], [43.8, 560.0], [43.9, 571.0], [44.0, 571.0], [44.1, 571.0], [44.2, 571.0], [44.3, 576.0], [44.4, 576.0], [44.5, 576.0], [44.6, 576.0], [44.7, 576.0], [44.8, 576.0], [44.9, 576.0], [45.0, 576.0], [45.1, 576.0], [45.2, 576.0], [45.3, 579.0], [45.4, 579.0], [45.5, 579.0], [45.6, 579.0], [45.7, 579.0], [45.8, 581.0], [45.9, 581.0], [46.0, 581.0], [46.1, 581.0], [46.2, 581.0], [46.3, 581.0], [46.4, 581.0], [46.5, 581.0], [46.6, 581.0], [46.7, 583.0], [46.8, 583.0], [46.9, 583.0], [47.0, 583.0], [47.1, 583.0], [47.2, 584.0], [47.3, 584.0], [47.4, 584.0], [47.5, 584.0], [47.6, 584.0], [47.7, 587.0], [47.8, 587.0], [47.9, 587.0], [48.0, 587.0], [48.1, 588.0], [48.2, 588.0], [48.3, 588.0], [48.4, 588.0], [48.5, 588.0], [48.6, 590.0], [48.7, 590.0], [48.8, 590.0], [48.9, 590.0], [49.0, 590.0], [49.1, 593.0], [49.2, 593.0], [49.3, 593.0], [49.4, 593.0], [49.5, 593.0], [49.6, 594.0], [49.7, 594.0], [49.8, 594.0], [49.9, 594.0], [50.0, 596.0], [50.1, 596.0], [50.2, 596.0], [50.3, 596.0], [50.4, 596.0], [50.5, 599.0], [50.6, 599.0], [50.7, 599.0], [50.8, 599.0], [50.9, 599.0], [51.0, 602.0], [51.1, 602.0], [51.2, 602.0], [51.3, 602.0], [51.4, 602.0], [51.5, 602.0], [51.6, 602.0], [51.7, 602.0], [51.8, 602.0], [51.9, 602.0], [52.0, 605.0], [52.1, 605.0], [52.2, 605.0], [52.3, 605.0], [52.4, 609.0], [52.5, 609.0], [52.6, 609.0], [52.7, 609.0], [52.8, 609.0], [52.9, 610.0], [53.0, 610.0], [53.1, 610.0], [53.2, 610.0], [53.3, 610.0], [53.4, 614.0], [53.5, 614.0], [53.6, 614.0], [53.7, 614.0], [53.8, 614.0], [53.9, 623.0], [54.0, 623.0], [54.1, 623.0], [54.2, 623.0], [54.3, 624.0], [54.4, 624.0], [54.5, 624.0], [54.6, 624.0], [54.7, 624.0], [54.8, 626.0], [54.9, 626.0], [55.0, 626.0], [55.1, 626.0], [55.2, 626.0], [55.3, 627.0], [55.4, 627.0], [55.5, 627.0], [55.6, 627.0], [55.7, 627.0], [55.8, 628.0], [55.9, 628.0], [56.0, 628.0], [56.1, 628.0], [56.2, 629.0], [56.3, 629.0], [56.4, 629.0], [56.5, 629.0], [56.6, 629.0], [56.7, 638.0], [56.8, 638.0], [56.9, 638.0], [57.0, 638.0], [57.1, 638.0], [57.2, 638.0], [57.3, 638.0], [57.4, 638.0], [57.5, 638.0], [57.6, 638.0], [57.7, 640.0], [57.8, 640.0], [57.9, 640.0], [58.0, 640.0], [58.1, 640.0], [58.2, 640.0], [58.3, 640.0], [58.4, 640.0], [58.5, 640.0], [58.6, 641.0], [58.7, 641.0], [58.8, 641.0], [58.9, 641.0], [59.0, 641.0], [59.1, 641.0], [59.2, 641.0], [59.3, 641.0], [59.4, 641.0], [59.5, 641.0], [59.6, 642.0], [59.7, 642.0], [59.8, 642.0], [59.9, 642.0], [60.0, 642.0], [60.1, 642.0], [60.2, 642.0], [60.3, 642.0], [60.4, 642.0], [60.5, 642.0], [60.6, 642.0], [60.7, 642.0], [60.8, 642.0], [60.9, 642.0], [61.0, 642.0], [61.1, 642.0], [61.2, 642.0], [61.3, 642.0], [61.4, 642.0], [61.5, 642.0], [61.6, 642.0], [61.7, 642.0], [61.8, 642.0], [61.9, 642.0], [62.0, 643.0], [62.1, 643.0], [62.2, 643.0], [62.3, 643.0], [62.4, 643.0], [62.5, 643.0], [62.6, 643.0], [62.7, 643.0], [62.8, 643.0], [62.9, 643.0], [63.0, 643.0], [63.1, 643.0], [63.2, 643.0], [63.3, 643.0], [63.4, 643.0], [63.5, 643.0], [63.6, 643.0], [63.7, 643.0], [63.8, 643.0], [63.9, 643.0], [64.0, 643.0], [64.1, 643.0], [64.2, 643.0], [64.3, 646.0], [64.4, 646.0], [64.5, 646.0], [64.6, 646.0], [64.7, 646.0], [64.8, 652.0], [64.9, 652.0], [65.0, 652.0], [65.1, 652.0], [65.2, 652.0], [65.3, 660.0], [65.4, 660.0], [65.5, 660.0], [65.6, 660.0], [65.7, 660.0], [65.8, 661.0], [65.9, 661.0], [66.0, 661.0], [66.1, 661.0], [66.2, 662.0], [66.3, 662.0], [66.4, 662.0], [66.5, 662.0], [66.6, 662.0], [66.7, 666.0], [66.8, 666.0], [66.9, 666.0], [67.0, 666.0], [67.1, 666.0], [67.2, 666.0], [67.3, 666.0], [67.4, 666.0], [67.5, 666.0], [67.6, 666.0], [67.7, 671.0], [67.8, 671.0], [67.9, 671.0], [68.0, 671.0], [68.1, 672.0], [68.2, 672.0], [68.3, 672.0], [68.4, 672.0], [68.5, 672.0], [68.6, 675.0], [68.7, 675.0], [68.8, 675.0], [68.9, 675.0], [69.0, 675.0], [69.1, 676.0], [69.2, 676.0], [69.3, 676.0], [69.4, 676.0], [69.5, 676.0], [69.6, 703.0], [69.7, 703.0], [69.8, 703.0], [69.9, 703.0], [70.0, 710.0], [70.1, 710.0], [70.2, 710.0], [70.3, 710.0], [70.4, 710.0], [70.5, 712.0], [70.6, 712.0], [70.7, 712.0], [70.8, 712.0], [70.9, 712.0], [71.0, 719.0], [71.1, 719.0], [71.2, 719.0], [71.3, 719.0], [71.4, 719.0], [71.5, 734.0], [71.6, 734.0], [71.7, 734.0], [71.8, 734.0], [71.9, 734.0], [72.0, 739.0], [72.1, 739.0], [72.2, 739.0], [72.3, 739.0], [72.4, 741.0], [72.5, 741.0], [72.6, 741.0], [72.7, 741.0], [72.8, 741.0], [72.9, 749.0], [73.0, 749.0], [73.1, 749.0], [73.2, 749.0], [73.3, 749.0], [73.4, 766.0], [73.5, 766.0], [73.6, 766.0], [73.7, 766.0], [73.8, 766.0], [73.9, 773.0], [74.0, 773.0], [74.1, 773.0], [74.2, 773.0], [74.3, 786.0], [74.4, 786.0], [74.5, 786.0], [74.6, 786.0], [74.7, 786.0], [74.8, 791.0], [74.9, 791.0], [75.0, 791.0], [75.1, 791.0], [75.2, 791.0], [75.3, 815.0], [75.4, 815.0], [75.5, 815.0], [75.6, 815.0], [75.7, 815.0], [75.8, 831.0], [75.9, 831.0], [76.0, 831.0], [76.1, 831.0], [76.2, 834.0], [76.3, 834.0], [76.4, 834.0], [76.5, 834.0], [76.6, 834.0], [76.7, 834.0], [76.8, 834.0], [76.9, 834.0], [77.0, 834.0], [77.1, 834.0], [77.2, 834.0], [77.3, 834.0], [77.4, 834.0], [77.5, 834.0], [77.6, 834.0], [77.7, 836.0], [77.8, 836.0], [77.9, 836.0], [78.0, 836.0], [78.1, 838.0], [78.2, 838.0], [78.3, 838.0], [78.4, 838.0], [78.5, 838.0], [78.6, 839.0], [78.7, 839.0], [78.8, 839.0], [78.9, 839.0], [79.0, 839.0], [79.1, 839.0], [79.2, 839.0], [79.3, 839.0], [79.4, 839.0], [79.5, 839.0], [79.6, 839.0], [79.7, 839.0], [79.8, 839.0], [79.9, 839.0], [80.0, 840.0], [80.1, 840.0], [80.2, 840.0], [80.3, 840.0], [80.4, 840.0], [80.5, 841.0], [80.6, 841.0], [80.7, 841.0], [80.8, 841.0], [80.9, 841.0], [81.0, 841.0], [81.1, 841.0], [81.2, 841.0], [81.3, 841.0], [81.4, 841.0], [81.5, 842.0], [81.6, 842.0], [81.7, 842.0], [81.8, 842.0], [81.9, 842.0], [82.0, 842.0], [82.1, 842.0], [82.2, 842.0], [82.3, 842.0], [82.4, 843.0], [82.5, 843.0], [82.6, 843.0], [82.7, 843.0], [82.8, 843.0], [82.9, 844.0], [83.0, 844.0], [83.1, 844.0], [83.2, 844.0], [83.3, 844.0], [83.4, 846.0], [83.5, 846.0], [83.6, 846.0], [83.7, 846.0], [83.8, 846.0], [83.9, 849.0], [84.0, 849.0], [84.1, 849.0], [84.2, 849.0], [84.3, 849.0], [84.4, 849.0], [84.5, 849.0], [84.6, 849.0], [84.7, 849.0], [84.8, 850.0], [84.9, 850.0], [85.0, 850.0], [85.1, 850.0], [85.2, 850.0], [85.3, 850.0], [85.4, 850.0], [85.5, 850.0], [85.6, 850.0], [85.7, 850.0], [85.8, 850.0], [85.9, 850.0], [86.0, 850.0], [86.1, 850.0], [86.2, 851.0], [86.3, 851.0], [86.4, 851.0], [86.5, 851.0], [86.6, 851.0], [86.7, 851.0], [86.8, 851.0], [86.9, 851.0], [87.0, 851.0], [87.1, 851.0], [87.2, 851.0], [87.3, 851.0], [87.4, 851.0], [87.5, 851.0], [87.6, 851.0], [87.7, 852.0], [87.8, 852.0], [87.9, 852.0], [88.0, 852.0], [88.1, 853.0], [88.2, 853.0], [88.3, 853.0], [88.4, 853.0], [88.5, 853.0], [88.6, 853.0], [88.7, 853.0], [88.8, 853.0], [88.9, 853.0], [89.0, 853.0], [89.1, 853.0], [89.2, 853.0], [89.3, 853.0], [89.4, 853.0], [89.5, 853.0], [89.6, 854.0], [89.7, 854.0], [89.8, 854.0], [89.9, 854.0], [90.0, 854.0], [90.1, 854.0], [90.2, 854.0], [90.3, 854.0], [90.4, 854.0], [90.5, 855.0], [90.6, 855.0], [90.7, 855.0], [90.8, 855.0], [90.9, 855.0], [91.0, 856.0], [91.1, 856.0], [91.2, 856.0], [91.3, 856.0], [91.4, 856.0], [91.5, 857.0], [91.6, 857.0], [91.7, 857.0], [91.8, 857.0], [91.9, 857.0], [92.0, 859.0], [92.1, 859.0], [92.2, 859.0], [92.3, 859.0], [92.4, 859.0], [92.5, 859.0], [92.6, 859.0], [92.7, 859.0], [92.8, 859.0], [92.9, 859.0], [93.0, 859.0], [93.1, 859.0], [93.2, 859.0], [93.3, 859.0], [93.4, 860.0], [93.5, 860.0], [93.6, 860.0], [93.7, 860.0], [93.8, 860.0], [93.9, 871.0], [94.0, 871.0], [94.1, 871.0], [94.2, 871.0], [94.3, 871.0], [94.4, 871.0], [94.5, 871.0], [94.6, 871.0], [94.7, 871.0], [94.8, 872.0], [94.9, 872.0], [95.0, 872.0], [95.1, 872.0], [95.2, 872.0], [95.3, 875.0], [95.4, 875.0], [95.5, 875.0], [95.6, 875.0], [95.7, 875.0], [95.8, 875.0], [95.9, 875.0], [96.0, 875.0], [96.1, 875.0], [96.2, 876.0], [96.3, 876.0], [96.4, 876.0], [96.5, 876.0], [96.6, 876.0], [96.7, 876.0], [96.8, 876.0], [96.9, 876.0], [97.0, 876.0], [97.1, 876.0], [97.2, 886.0], [97.3, 886.0], [97.4, 886.0], [97.5, 886.0], [97.6, 886.0], [97.7, 886.0], [97.8, 886.0], [97.9, 886.0], [98.0, 886.0], [98.1, 886.0], [98.2, 886.0], [98.3, 886.0], [98.4, 886.0], [98.5, 886.0], [98.6, 890.0], [98.7, 890.0], [98.8, 890.0], [98.9, 890.0], [99.0, 890.0], [99.1, 893.0], [99.2, 893.0], [99.3, 893.0], [99.4, 893.0], [99.5, 893.0], [99.6, 893.0], [99.7, 893.0], [99.8, 893.0], [99.9, 893.0], [100.0, 893.0]], "isOverall": false, "label": "patient_delete", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 52.0, "series": [{"data": [[0.0, 3.0], [300.0, 14.0], [600.0, 39.0], [700.0, 12.0], [400.0, 23.0], [100.0, 24.0], [200.0, 5.0], [800.0, 52.0], [500.0, 38.0]], "isOverall": false, "label": "patient_delete", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 210.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 210.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 210.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 178.87619047619035, "minX": 1.76573568E12, "maxY": 178.87619047619035, "series": [{"data": [[1.76573568E12, 178.87619047619035]], "isOverall": false, "label": "Stress Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76573568E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 319.75, "minX": 169.0, "maxY": 791.0, "series": [{"data": [[173.0, 555.8124999999999], [172.0, 491.15999999999997], [171.0, 515.1666666666666], [169.0, 506.55], [170.0, 643.5], [182.0, 319.75], [181.0, 487.0], [183.0, 527.9375], [180.0, 440.2], [179.0, 523.0], [186.0, 766.0], [185.0, 791.0], [184.0, 654.2391304347826]], "isOverall": false, "label": "patient_delete", "isController": false}, {"data": [[178.87619047619035, 570.0952380952377]], "isOverall": false, "label": "patient_delete-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 186.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.85, "minX": 1.76573568E12, "maxY": 9532.966666666667, "series": [{"data": [[1.76573568E12, 9532.966666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76573568E12, 15.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76573568E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 570.0952380952377, "minX": 1.76573568E12, "maxY": 570.0952380952377, "series": [{"data": [[1.76573568E12, 570.0952380952377]], "isOverall": false, "label": "patient_delete", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76573568E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7.438095238095241, "minX": 1.76573568E12, "maxY": 7.438095238095241, "series": [{"data": [[1.76573568E12, 7.438095238095241]], "isOverall": false, "label": "patient_delete", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76573568E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 42.023809523809554, "minX": 1.76573568E12, "maxY": 42.023809523809554, "series": [{"data": [[1.76573568E12, 42.023809523809554]], "isOverall": false, "label": "patient_delete", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76573568E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 595.0, "minX": 210.0, "maxY": 595.0, "series": [{"data": [[210.0, 595.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 210.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 210.0, "maxY": 4.9E-324, "series": [{"data": [[210.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 210.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.76573568E12, "maxY": 3.5, "series": [{"data": [[1.76573568E12, 3.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76573568E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76573568E12, "maxY": 3.4166666666666665, "series": [{"data": [[1.76573568E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.impl.execchain.RequestAbortedException", "isController": false}, {"data": [[1.76573568E12, 0.06666666666666667]], "isOverall": false, "label": "404", "isController": false}, {"data": [[1.76573568E12, 3.4166666666666665]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76573568E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.76573568E12, "maxY": 3.5, "series": [{"data": [[1.76573568E12, 3.5]], "isOverall": false, "label": "patient_delete-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76573568E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.76573568E12, "maxY": 3.5, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76573568E12, 3.5]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76573568E12, "title": "Total Transactions Per Second"}},
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

