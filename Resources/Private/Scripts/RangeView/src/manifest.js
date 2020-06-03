import manifest from '@neos-project/neos-ui-extensibility';
import RangeView from './RangeView';

manifest('TechDivision.WebVitals:RangeView', {}, globalRegistry => {
    const viewRegistry = globalRegistry.get('inspector').get('views');
    viewRegistry.set('TechDivision.WebVitals/RangeView',  {
        component: RangeView
    });
});
