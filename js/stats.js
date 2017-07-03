$(document).ready(function() { // 6,32 5,38 2,34
    $("#test-circle").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        replacePercentageByText: '1000kg',
        textSize: 28,
        text: 'Mancare donata',
        textStyle: 'font-size: 12px;',
        textColor: '#666',
        multiPercentage: 1,
        percentages: [10, 20, 30]
    });
    $("#test-circle2").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        replacePercentageByText: '10',
        text: 'Restaurante',
        textSize: 28,
        textStyle: 'font-size: 12px;',
        textColor: '#666',
        multiPercentage: 1,
        percentages: [10, 20, 30]
    });
    $("#test-circle3").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        replacePercentageByText: '5',
        text: 'ONG-uri',
        textSize: 28,
        textStyle: 'font-size: 12px;',
        textColor: '#666',
        multiPercentage: 1,
        percentages: [10, 20, 30]
    });
});