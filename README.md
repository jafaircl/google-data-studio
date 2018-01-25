# Google Data Studio Community Connectors
by Jonathan Faircloth

---

## Call Tracking Metrics Data Connector

This data connector provides access to your Call Tracking Metrics data in Google Data Studio. It interacts directly with the Call Tracking Metrics API to pull in your data. This connector is under continuous development and may change at any time.

### Usage
You will need an API Access Key and Secret Key from your Call Tracking Metrics Account as well as an Account ID to use with this connector. You will be prompted to enter this information when you make the connection.

Some data types ~~will~~ may need to be modified to use effectively in reports. ~~Google does not currently allow defining data types more specific than "NUMBER", "BOOLEAN" or "STRING". As such, geographies, dates, durations, etc. will be one of these generalized types and will need to be modified.~~ [As of 12/13/2017 Google supports specific data types](https://developers.google.com/datastudio/connector/changelog)

---

## Facebook

This data connector provides access to your Facebook Ads data in Google Data Studio. It interacts directly with the Facebook Marketing API to pull in your data. This connector is under continuous development and may change at any time.

The currently available Facebook to Data Studio community connectors show discrepancies with data acquired from the Facebook Ads dashboard. This connector will pull data directly from the Marketing API. Since this is the same data source that the Facebook Ads dashboard uses, there should be no discrepancies. It is not complete and may be missing fields and/or features.

---

### Support
Please feel free to submit comments, bug reports and feature requests in this repository: https://github.com/jafaircl/google-data-studio/issues

### License
See https://github.com/jafaircl/google-data-studio/blob/master/LICENSE