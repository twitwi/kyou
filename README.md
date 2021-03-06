# KYou

Through your webtools, your objects and your collaborations you create a huge
amount of personal data. Unfortunately you can't take advantage of it at its
full potential. That's a pity because you could learn a lot about yourself. To
picture it, let's say that the world of personal data is like an unexplored
land where the entrance is right behind your house.  You know you could enter
it but you don't really know where to go once you are there. It makes you sad
because you are pretty sure that lots of new suprises await you.

KYou is the first steps through this new country. By building analytics from
your [Cozy](http://cozy.io) data, it provides you the first shape of a
better knowledge of yourself. Kyou aggregates data from your web applications
and displays it as simple charts. With the help of these new insights, you
will learn more about you and improve yourself.

## Trackers

Analytics are built from trackers. There are three kinds of trackers
(only the two first ones have been implemented yet):

* trackers that aggregate data from your Cozy
* trackers that require a daily recording from you
* trackers that aggregate data from outside your Cozy

## Available trackers

**Mood** Store your mood every day and look if there are correlations with
other analytics.

**Task** Count how many tasks were marked done every day. Data comes from 
[Cozy Todos](https://github.com/mycozycloud/cozy-todos)

**Events** Count how many events were listed every day. Data comes from 
[Cozy Calendar](https://github.com/mycozycloud/cozy-calendar)

**Expenses** Count how many money you spent every day. Data comes from 
[Cozy PFM](https://github.com/seeker89/cozy-pfm)

**Steps** Count how many steps you walk every day. Data comes from [Jawbone
UP](http://www.jawbone.com/up).

**Sleep** Count how many minutes you sleep every day. Data comes from [Jawbone
UP](http://www.jawbone.com/up).

**Tweets** Count how many tweets you published every day. Data comes from 
[Twitter](https://twitter.com)

**Custrom trackers** The tracker you require, set title and description then go
track your specific stuff.

## What about contributions?

Here are the next things I have in mind and not started yet. Your participation
to them would be highly appreciated. Of course any idea is welcome!

* allow to import CSV data into a custom tracker
* allow to see raw data for mood and basic tracker 
* send daily reminders to fill custom trackers
* allow to add a goal line
* send weekly report on goal achievements
* allow user to hide the trackers he doesn't use
* localization/translations
* write tests
* mobile app

### Coding trackers

To add a tracker of your own, add a plugin to this
[folder](https://github.com/frankrousseau/kyou/tree/master/server/trackers).
Adding a tracker requires one coffeescript file, with the following fields:

* a name
* a color
* description
* Cozy model from where the data comes from
* A Data System request to describe the process required to build the data.

See existing trackers for example.

### Coding connector to fetch data from web services

See the [Konnectors](https://github.com/frankrousseau/konnectors) project.
This project allows to build easily connectors to other web services for your
Cozy.

## Press

[Wired](http://www.wired.com/wiredenterprise/2013/09/cozy-cloud/), 
[MeMachine](http://memachine.nl/?p=1381)


## Credits

KYou logo comes from Iconmonstr.com

KYou is licensed under AGPL v3
