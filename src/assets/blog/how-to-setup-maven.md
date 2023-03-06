Title: How To Setup Maven on MacOS

Over the past few months I have assisted a few developers during the onboarding process for my project.  One of the first tasks for any developer is to setup your development environment.  This can be a tedious process because you often “set it and forget it” only to revisit the process once every few years.  We have found it extremely helpful on my development team to take detailed notes on the initial onboarding and setup instructions which we can pass along to new developers on the team.  This is a win-win situation, any new developers can be handed a detailed instruction document and quickly begin getting up to speed while avoiding frustrations.  Existing developers can also look back and reference the documentation if they need to recreate or update their current development environment.  One of the initial documents that we have put together is how to setup Maven on your MacOS machine.  This guide will serve as a step by step instruction to getting you started with Maven.

Before we get into setting up your Maven environment let me give you a quick rundown of what maven is.  Maven is a popular open-source build tool developed by Apache Group to build, publish, and deploy several projects at once for better project management.  The tool allows developers to build and document the life cycle framework.  Maven focuses on the simplification and standardization of the building process, taking care of the following:
- Builds
- Documentation
- Dependencies
- Reports
- SCMs
- Distribution
- Releases
- Mailing list

To learn more about Maven I recommend checking out the official documentation: (https://maven.apache.org)

Now onto the setup! 

### Step 1: Install Maven:

The installation of Apache Maven is a simple process of extracting the archive and adding the **bin** folder with the **mvn** command to the **Path**.  It is standard practice to install maven inside of your **opt** file on your disk.  If you haven’t already, used “Command, Shift, .” To view your hidden files and browse to “opt” under your local hard drive.

### Step 2: Setting Environment Variable:

Now that Maven is in the correct location, you must create an environment variable that points to the Maven repository.  To do this, open “Terminal” and enter the command “vim ~/.bash_profile”. Once vim is opened add the following lines to .bash_profile, “export M2_Home=/opt/apache-maven-3.8.6” and “PATH=${M2_HOME}/bin:${PATH}”.

If you are working on a Java project, you will also need to setup the JAVA_HOME variable.  Follow the same steps above and point your variable to the path of your java installation.

### Step 3: Verify Installation:

To finish the setup, you will want to verify that Maven is now installed on your Mac.  Simply open a new terminal command prompt and run the following command: “mvn -version”.  The results should look similar to the following: 

```
Apache Maven 3.8.6 (84538c9988a25aec085021c365c560670ad80f63)
Maven home: /opt/apache-maven-3.8.6
Java version: 1.8.0_45, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "mac os x", version: "10.8.5", arch: "x86_64", family: "mac"
```

**Success, That’s it!** You should now be able to run Maven commands on your Mac.  Refer back to the instructions below if you have any questions.
https://maven.apache.org/install.html