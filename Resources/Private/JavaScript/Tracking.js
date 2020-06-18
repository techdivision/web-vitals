import { getCLS, getFID, getLCP, getTTFB, getFCP } from 'web-vitals';
import { createApiReporter, getDeviceInfo } from 'web-vitals-reporter';


export const load = addEventListener('DOMContentLoaded', function() {

    let siteReference = document.querySelector('script[data-neos-sitereference]').getAttribute('data-neos-sitereference'),
        nodeReference = document.querySelector('script[data-neos-nodereference]').getAttribute('data-neos-nodereference'),
        nodeDimensions = document.querySelector('script[data-neos-nodedimensions]').getAttribute('data-neos-nodedimensions');

    let trackWebVital = createApiReporter('/webvitals/track/', {
        initial: {
            'webVitalsMeasure[nodeReference]': nodeReference,
            'webVitalsMeasure[siteReference]': siteReference,
            'webVitalsMeasure[nodeDimensions]': nodeDimensions,
        },
        mapMetric: (metric) => {
            switch (metric.name) {
                case 'LCP': {
                    const entry = metric.entries[metric.entries.length - 1] // use the last
                    return {
                        'webVitalsMeasure[lcp]': metric.value
                    }
                }
                case 'CLS': {
                    return {
                        'webVitalsMeasure[cls]': metric.value
                    }
                }
                case 'FID': {
                    const entry = metric.entries[0]
                    return {
                        'webVitalsMeasure[fid]': metric.value
                    }
                }

                // default name –> value mapping
                default:
                    const name = 'webVitalsMeasure[' + [metric.name] + ']';
                    return { name: metric.value }
            }
        },
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

