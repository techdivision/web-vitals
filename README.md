# Web Vitals for Neos

Web Vitals are core metrics for your website's browser rendering health status;
i.e. how fast and reliable does your site show in the browser.  
https://web.dev/vitals

Google is about to add those WebVitals to their ranking algorithm.  
This plugin adds Real User Monitoring for those metrics to your Neos site
so you can track and improve it accordingly.
https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html

The plugin is GDPR safe as we do not collect any personal data at all or even send them to some third party.
It is about collecting data about your website, not about your visitors (real user monitoring).

## What this Neos plugin does

This plugin tracks certain metrics from your website using the JavaScript Beacon API. As soon as a measure is captured,
it is being tracked - the measurement largely depends on the client (tab active etc.).  
The idea is to capture the data and show them for each single site, document and dimension.

> :warning: Data may increase to large amounts easily and is stored in the database in this version.

In the backend you find a tab in the inspector of every page.
The graph shows the distribution between recommended benchmarks (these heuristic numbers can be found at https://web.dev).  
You can also see the timeframe and the number of collected single values for this document/dimension.

![WebVitals](./Documentation/Images/WebVitals_Inspector.png 'Neos inspector views')

You also have a complete overview in a separate backend module, also with distribution, timeframe and number of single metrics.  
This helps you to find overall weaknesses on your website.

![WebVitals](./Documentation/Images/WebVitals_BackendModule.png 'Neos backend module')

After installation it will take some time to capture a set of data.
Analytics is real time, so you can see results as soon as your page has been viewed.

## Installation

TechDivision.WebVitals is available via packagist. Add `"techdivision/web-vitals" : "~1.0"` to the require section of the composer.json
or run `composer require techdivision/web-vitals`.

### Configuration

There are some options for configuration and integration available:

#### Disable Tracking

You can disable the tracking - e.g. when you have a multi-site setup and only want to track on certain sites -
by adding the following lines to the correct Settings.yaml:

```
TechDivision:
  WebVitals:
    enableTracking: false
```

#### Fusion

The package extends the `Neos.Neos:Page` prototype and adds some JavaScript to the very bottom of the page.
This should be safe and not interfere with the rest of your JavaScript. If so, please give us a hint to improve it.

### ToDo

The plugin is in a very early stage, but it already can guide you the way to improve your website performance.  
Some areas of improvement for the future:

-   Add translations labels
-   Improve data storage, e.g. elastic search backend
-   DB indices
-   Test with large amounts of data
-   Add user agent tracking for better comparison between
-   Add requests to a queue for asynchronous tracking
-   Select start- and end date in backend module (and in inspector?)

### Contribution

We will be happy to receive pull requests - dont hesitate!
