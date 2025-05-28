function injectScript(fn) {
  const script = document.createElement('script');
  script.textContent = `(${fn})();`;
  document.documentElement.appendChild(script);
  script.remove();
}

// Inject a script into the page to dispatch the Leaflet version
injectScript(function() {
  function dispatchLeaflet() {
    if (window.L && window.L.version) {
      window.dispatchEvent(new CustomEvent('leafletReady', {
        detail: { version: window.L.version }
      }));
    } else {
      setTimeout(dispatchLeaflet, 500);
    }
    let agelLenses = {
    'AGEL000224-350716A':[	0.5985,	-35.1212],																							
    'AGEL000316-334804A':[	0.8183,	-33.8012],																							
    'AGEL000645-442950A':[	1.6859,	-44.4973],																							
    'AGEL000729-443446A':[	1.8720,	-44.5795],																							
    'AGEL001310+004004A':[	3.2902,	0.6677],																							
    'AGEL001424+004145A':[	3.6012,	0.6960],																							
    'AGEL001702-100911A':[	4.2564,	-10.1530],																							
    'AGEL002527+101107A':[	6.3643,	10.1853],																							
    'AGEL002700-041324A':[	6.7503,	-4.2232],																							
    'AGEL003508-252658A':[	8.7815,	-25.4493],																							
    'AGEL003727-413150A':[	9.3628,	-41.5305],																							
    'AGEL004144-233905A':[	10.4341	,-23.6515],																							
    'AGEL004257-371858A':[	10.7388	,-37.3162],																							
    'AGEL004827+031117A':[	12.1134	,3.1881	],																						
    'AGEL010128-334319A':[	15.3660	,-33.7220],																							
    'AGEL010158-491738A':[	15.4918	,-49.2939],																							
    'AGEL010238+015857A':[	15.6596	,1.9824																							],
    'AGEL010257-291122A':[	15.7395	,-29.1894],																							
    'AGEL011759-052718A':[	19.4948	,-5.4549																							],
    'AGEL012429-291856A':[	21.1189	,-29.3156],																							
    'AGEL012453-144303A':[	21.2211	,-14.7174],																							
    'AGEL013003-374458A':[	22.5120	,-37.7494],																							
    'AGEL013355-643413A':[	23.4777	,-64.5703],																							
    'AGEL013442+043350A':[	23.6765	,4.5639																							],
    'AGEL013442+043350B':[	23.6765	,4.5639																							],
    'AGEL013639+000818A':[	24.1631	,0.1384																							],
    'AGEL013719-083056A':[	24.3285	,-8.5155																							],
    'AGEL014106-171324A':[	25.2756	,-17.2233],																							
    'AGEL014235-164818A':[	25.6457	,-16.8049],																							
    'AGEL014253-183116A':[	25.7203	,-18.5211],																							
    'AGEL014327-085021A':[	25.8622	,-8.8392],																							
    'AGEL014504-045551A':[	26.2679	,-4.9308],																							
    'AGEL014556+040229A':[	26.4848	,4.0414],																							
    'AGEL015009-030438A':[	27.5379	,-3.0773],																							
    'AGEL015153-144825A':[	27.9723	,-14.8069],																							
    'AGEL015643-101100A':[	29.1780	,-10.1834],																							
    'AGEL020613-011417A':[	31.5561	,-1.2382																							],
    'AGEL020707-272645A':[	31.7777	,-27.4458],																							
    'AGEL020707-272645B':[	31.7777	,-27.4458],																							
    'AGEL021225-085211A':[	33.1051	,-8.8697																							],
    'AGEL022709-471856A':[	36.7873	,-47.3155],																							
    'AGEL022931-290816A':[	37.3791	,-29.1379],																							
    'AGEL023211+001339A':[	38.0468	,0.2276																							],
    'AGEL024303-000600A':[	40.7627	,-0.1001																							],
    'AGEL024303-000600B':[	40.7627	,-0.1001																							],
    'AGEL024605-060739A':[	41.5205	,-6.1275																							],
    'AGEL025052-552412A':[	42.7178	,-55.4032],																							
    'AGEL025220-473238A':[	43.0828	,-47.5438],																							
    'AGEL033203-132510A':[	53.0106	,-13.4195],																							
    'AGEL033203-132510B':[	53.0106	,-13.4195],																							
    'AGEL033717-315214A':[	54.3218	,-31.8704],																							
    'AGEL034131-513045A':[	55.3783	,-51.5124],																							
    'AGEL035346-170639B':[	58.4427	,-17.1109],																							
    'AGEL035346-170639A':[	58.4427	,-17.1109],																							
    'AGEL035418-160952A':[	58.5761	,-16.1645],																							
    'AGEL040823-532714A':[	62.0944	,-53.4539],																							
    'AGEL042439-331742A':[	66.1612	,-33.2949],																							
    'AGEL043806-322852A':[	69.5257	,-32.4812],																							
    'AGEL053724-464702A':[	84.3516	,-46.7840],																							
    'AGEL061815+501821A':[	94.5639	,50.3059],																							
    'AGEL075524+344540A':[	118.8480,	34.7610],																							
    'AGEL080820+103142B':[	122.0852,	10.5284],																							
    'AGEL080820+103142A':[	122.0852,	10.5284],																							
    'AGEL083930+021025A':[	129.8766,	2.1735],																							
    'AGEL084633-015417A':[	131.6362,	-1.9047],																							
    'AGEL084943+294328A':[	132.4294,	29.7244],																							
    'AGEL085331+232155A':[	133.3800,	23.3652],																							
    'AGEL085413-042409A':[	133.5531,	-4.4026],																							
    'AGEL085917+061517A':[	134.8207,	6.2549],																							
    'AGEL090115+095624A':[	135.3125,	9.9401],																							
    'AGEL091126+141757A':[	137.8568,	14.2991],																							
    'AGEL091905+033639A':[	139.7692,	3.6107],																							
    'AGEL091935+303156A':[	139.8960,	30.5323],																							
    'AGEL092315+182943A':[	140.8110,	18.4954],																							
    'AGEL093333+091919B':[	143.3887,	9.3219],																							
    'AGEL093333+091919A':[	143.3887,	9.3219],																							
    'AGEL094328-015453A':[	145.8652,	-1.9148],																							
    'AGEL094412+322039A':[	146.0493,	32.3441],																							
    'AGEL101807-000812A':[	154.5307,	-0.1368],																							
    'AGEL101847-012132A':[	154.6972,	-1.3590],																							
    'AGEL103027-064109A':[	157.6135,	-6.6858],																							
    'AGEL104041+185052A':[	160.1716,	18.8477],																							
    'AGEL104056-010359A':[	160.2351,	-1.0663],																							
    'AGEL105100-055628A':[	162.7508,	-5.9411],																							
    'AGEL110154-060232A':[	165.4754,	-6.0423],																							
    'AGEL110245+121111A':[	165.6876,	12.1864],																							
    'AGEL113929-021826A':[	174.8727,	-2.3072],																							
    'AGEL114159+191815A':[	175.4961,	19.3041],																							
    'AGEL120535+411044A':[	181.3975,	41.1790],																							
    'AGEL123809+150151A':[	189.5370,	15.0309],																							
    'AGEL125146+014256A':[	192.9428,	1.7155],																							
    'AGEL132304+034319A':[	200.7672,	3.7221],																							
    'AGEL133041+044015A':[	202.6690,	4.6707],																							
    'AGEL133145+513431A':[	202.9388,	51.5753],																							
    'AGEL134333+415503B':[	205.8869,	41.9176],																							
    'AGEL140839+253104A':[	212.1614,	25.5178],																							
    'AGEL142104+002219A':[	215.2654,	0.3719],																							
    'AGEL142719-064515A':[	216.8280,	-6.7541],																							
    'AGEL144133-005401A':[	220.3875,	-0.9004],																							
    'AGEL144149+144121B':[	220.4549,	14.6891],																							
    'AGEL150137+520830A':[	225.4050,	52.1417],																							
    'AGEL150745+052256A':[	226.9381,	5.3823],																							
    'AGEL150745+052256B':[	226.9381,	5.3823],																							
    'AGEL150925+390140A':[	227.3528,	39.0279],																							
    'AGEL152509+422753A':[	231.2874,	42.4646],																							
    'AGEL152560+084639A':[	231.4998,	8.7774],																							
    'AGEL153755+144324A':[	234.4783,	14.7232],																							
    'AGEL153929+165016A':[	234.8707,	16.8379],																							
    'AGEL155417+044339A':[	238.5691,	4.7276],																							
    'AGEL162300+213721A':[	245.7514,	21.6226],																							
    'AGEL162401+012901A':[	246.0062,	1.4836],																							
    'AGEL165140+280517A':[	252.9173,	28.0881],																							
    'AGEL165742+344858A':[	254.4235,	34.8162],																							
    'AGEL170944+315417A':[	257.4348,	31.9046],																							
    'AGEL171922+244117A':[	259.8396,	24.6880],																							
    'AGEL172703+110008A':[	261.7637,	11.0021],																							
    'AGEL183520+460627A':[	278.8338,	46.1076],																							
    'AGEL193558+580909A':[	293.9927,	58.1525],																							
    'AGEL201419-575701A':[	303.5808,	-57.9504],																							
    'AGEL204312-060954A':[	310.8020,	-6.1649],																							
    'AGEL205616-423857A':[	314.0659,	-42.6492],																							
    'AGEL211005-563931A':[	317.5225,	-56.6585],																							
    'AGEL211243+000921A':[	318.1797,	0.1558],																							
    'AGEL211627-594702A':[	319.1138,	-59.7838],																							
    'AGEL212252-005949A':[	320.7167,	-0.9970],																							
    'AGEL212326+015312A':[	320.8584,	1.8867],																							
    'AGEL212512-650427A':[	321.3001,	-65.0741],																							
    'AGEL213758-012924A':[	324.4918,	-1.4900],																							
    'AGEL214915-001252A':[	327.3138,	-0.2143],																							
    'AGEL215122+134718A':[	327.8408,	13.7884],																							
    'AGEL215844+025730A':[	329.6820,	2.9584],																							
    'AGEL221912-434835A':[	334.8017,	-43.8098],																							
    'AGEL222609+004142A':[	336.5388,	0.6950],																							
    'AGEL224405+275916A':[	341.0206,	27.9877],																							
    'AGEL224621+223338A':[	341.5882,	22.5605],																							
    'AGEL230305-511502A':[	345.7696,	-51.2505],																							
    'AGEL230522-000212A':[	346.3403,	-0.0365],																							
    'AGEL231112-454658A':[	347.7987,	-45.7828],																							
    'AGEL231812-110604A':[	349.5492,	-11.1012],																							
    'AGEL231935+115016A':[	349.8938,	11.8378],																							
    'AGEL232128-463049A':[	350.3682,	-46.5137],																							
    'AGEL233459-640407A':[	353.7466,	-64.0686],																							
    'AGEL233552-515218A':[	353.9664,	-51.8716],																							
    'AGEL233610-020735A':[	354.0428,	-2.1264],																							
    'AGEL234930-511339A':[	357.3752,	-51.2275],																							
    'AGEL235934+020824A':[	359.8897,	2.1399]																						
    }; 
    let agelLensesKeys = Object.keys(agelLenses);



    // Add a control to display the AGEL survey information
    var agelSurveyInfo = window.L.control({'position':'topright'});
    agelSurveyInfo.onAdd = function (map) {
      this._div = window.L.DomUtil.create('div', 'agelSurveyInfo');
      this._div.innerHTML = `
        <div style="
          background: rgba(255,255,255,0.95);
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          padding: 18px 24px;
          min-width: 220px;
          font-family: Arial, sans-serif;
        ">
          <h3 id="agelID" style="
            margin-top: 0;
            margin-bottom: 10px;
            color: #2a4d8f;
            font-size: 1.3em;
            letter-spacing: 1px;
          "></h3>
        </div>
      `;
      return this._div;
    };
    agelSurveyInfo.addTo(window.map);

    function agelSearchAndDisplay(){
      console.log("AGEL search and display function called");
        document.getElementById('agelID').innerHTML = ""; // Clear the AGEL survey information control
        // when Enter is hit in the Object name search box
        if (event.keyCode == 13) {
            var qstring = $('#objquery').val();
            objqueryString = qstring;
            var splited = qstring.split(" ");
            if (splited.length === 2) {
                let RA = splited[0];
                let DEC = splited[1];

                let targetAvailable = false;
                // Check if input is within the dict agelLenses
                for(let i = 0; i < agelLensesKeys.length; i++) {
                    RA_agel = agelLenses[agelLensesKeys[i]][0];
                    DEC_agel = agelLenses[agelLensesKeys[i]][1];

                    if( Math.abs(RA - RA_agel) < 0.1 && Math.abs(DEC - DEC_agel) < 0.01) {
                        var clong = map.getCenter().lng;
                        var clat = map.getCenter().lat;
                        RA_agel_mod = ra2long_C(RA_agel, clong);
                        DEC_agel_mod = dec2lat(DEC_agel);
                        // Draw a circle marker at the AGEL lens position
                        var agelMarker = L.circleMarker([ DEC_agel_mod, RA_agel_mod], {
                            radius: 150,
                            color: '#2a4d8f',
                            fillOpacity: 0,
                    
                        }).addTo(window.map);
                        agelMarker.bindPopup(agelLensesKeys[i]);
                        // agelMarker.openPopup();
                        // Update the AGEL survey information control
                        document.getElementById('agelID').innerHTML =  document.getElementById('agelID').innerHTML + ", " + agelLensesKeys[i];
                            
                        targetAvailable = true;
                    }
                }
              
                
            }


        }
    }

    document.getElementById('objquery').addEventListener('keydown',agelSearchAndDisplay);

  }
  dispatchLeaflet();
});