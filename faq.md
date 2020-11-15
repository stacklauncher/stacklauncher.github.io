---
title: FAQ
navigation_weight: 2
---

### How do I add a "Launch in AWS" button to my github README

To add a launch button to your README file, you will need an [AWS CloudFormation template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-formats.html) file in `json` or `yaml` format in a public repository. Use the main page to simplify the generation of the required markdown text:

* Navigate to the [main page](https://www.stacklauncher.cloud)
* Enter the URL for your AWS template. The easiest way to find the link is to browse to your template file in github, click on the "RAW" button and copy the URL from the location bar of your browser.
* Optionally repeat the same process for a parameters file. 
* Click the button
* Copy the generated markdown text into your README.md file.

### Can I add a "Launch in AWS" button to a private repository

Currently this is not possible. To maintain the privacy and security of data in your private repositories we suggest that you use deployment automation tools such as AWS CodePipeline or AWS CodeBuild to launch your templates.

### I selected a region on the link but AWS logs me out

Some AWS regions require that you opt into using them first. If your template link contains a region that you have not whitelisted, AWS will log you out. To whitelist a region, navigate to the [AWS Management Console](https://console.aws.amazon.com/console/home), select the region of your choice in the drop-down selector at the top right and follow the prompts.

### Can I reference a parameter file in the link

Currently stacklauncher will only extract parameters from the supplied parameter file on link creation and explicitly add them to the embed link.