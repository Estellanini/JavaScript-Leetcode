//描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

//输入：[3,4,5,1,2]   返回值：1
function minNumberInRotateArray(rotateArray) {
    if(rotateArray.length===0) return 0;
    for(let i=1;i<rotateArray.length;i++){
        if(rotateArray[i]<rotateArray[i-1]){
            return rotateArray[i];
        }
    }
    return rotateArray[0];
}
array=[5527,5528,5571,5588,5594,5639,5664,5701,5705,5708,5753,5769,5778,5785,5811,5829,5830,5854,5888,5889,5913,5921,5949,5998,6003,6067,6084,6105,6112,6125,6138,6187,6210,6271,6286,6291,6297,6300,6312,6314,6327,6331,6333,6336,6337,6340,6354,6488,6516,6572,6602,6610,6620,6637,6638,6649,6703,6710,6775,6785,6819,6832,6842,6866,6888,6890,6909,6916,6943,6954,6970,6991,6994,6995,6999,7053,7056,7101,7104,7138,7199,7200,7275,7337,7403,7448,7490,7546,7595,7613,7637,7682,7700,7756,7790,7790,7808,7828,7853,7878,7948,7956,7961,7977,7983,7986,8004,8005,8048,8097,8128,8143,8147,8159,8160,8213,8218,8256,8264,8293,8320,8321,8360,8374,8442,8466,8481,8487,8490,8494,8503,8577,8582,8593,8600,8607,8614,8640,8693,8742,8755,8772,8812,8840,8849,8871,8888,8895,8898,8925,8939,8943,8943,8950,8983,9011,9016,9081,9083,9085,9107,9119,9158,9212,9228,9241,9284,9325,9325,9347,9362,9367,9391,9395,9402,9407,9416,9418,9424,9440,9451,9474,9477,9507,9565,9566,9607,9614,9615,9646,9697,9716,9738,9748,9819,9873,9878,9937,9963,9967,9969,9975,9991,9992,21,56,65,97,129,130,149,197,212,222,227,235,235,239,270,275,305,337,353,358,375,379,393,397,431,438,441,466,477,479,490,491,567,579,593,600,608,619,660,685,694,698,711,718,721,727,742,784,788,790,798,823,827,828,840,868,882,886,894,920,960,968,1003,1043,1071,1084,1089,1124,1130,1131,1134,1158,1174,1194,1215,1220,1222,1249,1250,1299,1318,1328,1356,1358,1358,1363,1389,1401,1410,1439,1441,1455,1465,1517,1540,1544,1563,1564,1592,1600,1616,1645,1646,1648,1654,1655,1663,1664,1685,1700,1715,1717,1729,1731,1739,1776,1779,1808,1816,1881,1904,1944,1947,1967,1970,1979,1980,2004,2021,2031,2039,2073,2087,2094,2100,2146,2147,2150,2172,2189,2190,2233,2248,2265,2281,2281,2281,2293,2295,2311,2322,2343,2348,2368,2383,2407,2411,2428,2438,2440,2447,2447,2500,2508,2520,2545,2566,2575,2584,2590,2633,2641,2666,2671,2673,2691,2692,2708,2711,2743,2777,2794,2811,2831,2835,2838,2842,2843,2843,2863,2907,2921,2963,2989,2997,3028,3069,3080,3100,3115,3126,3131,3172,3217,3229,3236,3295,3314,3341]
//array=[3,4,5,6,7,2]
console.log(minNumberInRotateArray(array));
