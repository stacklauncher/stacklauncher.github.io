---
title: FAQ
navigation_weight: 1
---

# How do I add a "Launch in AWS" button to my github README

To add a launch button to your README file, you will need a `template.json` or `template.yaml` file in a public repository. Use the main page to simplify the generation of the required markdown text:

* Navigate to the [main page](https://www.stacklauncher.cloud)
* Enter the URL for your AWS template. The easiest way to find the link is to browse to your template file in github, click on the "RAW" button and copy the URL from the location bar of your browser.
* Optionally repeat the same process for a parameters file. 
* Click the button
* Copy the generated markdown text into your README.md file.

# Can I add a "Launch in AWS" button to a private repository

Currently this is not possible. To maintain the privacy and security of data in your private repositories we suggest that you use deployment automation tools such as AWS CodePipeline or AWS CodeBuild to launch your templates.
