import { getCLS, getFID, getLCP, getTTFB, getFCP } from 'web-vitals';
import { createApiReporter, getDeviceInfo } from 'web-vitals-reporter';


export const load = addEventListener('DOMContentLoaded', function() {

    let siteReference = document.querySelector('script[data-neos-sitereference]').getAttribute('data-neos-sitereference'),
        nodeReference = document.querySelector('script[data-neos-nodereference]').getAttribute('data-neos-nodereference'),
        nodeDimensions = document.querySelector('script[data-neos-nodedimensions]').getAttribute('data-neos-nodedimensions');

    let trackWebVital = createApiReporter('/webvitals/track/', {
        initial: {
            nodeReference: nodeReference,
            siteReference: siteReference,
            nodeDimensions: nodeDimensions,
        }
    });


// Setup web-vitals
    getCLS(trackWebVital);
    getFID(trackWebVital);
    getLCP(trackWebVital);
    getTTFB(function (metric) {
        metric.value = metric.value - metric.entries[0].requestStart;
        trackWebVital(metric);
    });
    getFCP(trackWebVital);
});

