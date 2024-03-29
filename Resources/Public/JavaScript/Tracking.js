addEventListener('DOMContentLoaded', function () {
    var siteReference = document
            .querySelector('script[data-neos-sitereference]')
            .getAttribute('data-neos-sitereference'),
        nodeReference = document
            .querySelector('script[data-neos-nodereference]')
            .getAttribute('data-neos-nodereference'),
        nodeDimensions = document
            .querySelector('script[data-neos-nodedimensions]')
            .getAttribute('data-neos-nodedimensions'),
        api = '/webvitals/track/'

    function trackWebVital(metric) {
        if (navigator.sendBeacon) {
            var data = new FormData()
            data.append('webVitalMeasure[nodeReference]', nodeReference)
            data.append('webVitalMeasure[nodeDimensions]', nodeDimensions)
            data.append('webVitalMeasure[siteReference]', siteReference)
            data.append('webVitalMeasure[' + metric.name.toLowerCase() + ']', metric.value)
            navigator.sendBeacon(api, data)
        } else {
            var webVitalsImg = document.createElement('img')
            webVitalsImg.height = 1
            webVitalsImg.width = 1
            webVitalsImg.alt = ''
            webVitalsImg.style = 'border-style:none;'
            webVitalsImg.src =
                api +
                '?webVitalMeasure[nodeReference]=' +
                nodeReference +
                '&webVitalMeasure[nodeDimensions]=' +
                nodeDimensions +
                '&webVitalMeasure[siteReference]=' +
                siteReference +
                '&webVitalMeasure[' +
                metric.name.toLowerCase() +
                ']=' +
                metric.value
        }
    }

    webVitals.getCLS(trackWebVital)
    webVitals.getFID(trackWebVital)
    webVitals.getLCP(trackWebVital)
    webVitals.getTTFB(function (metric) {
        metric.value = metric.value - metric.entries[0].requestStart
        trackWebVital(metric)
    })
    webVitals.getFCP(trackWebVital)
})
