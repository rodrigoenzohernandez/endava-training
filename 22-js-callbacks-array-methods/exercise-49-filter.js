/**
Let's get some practice using the filter method. Write a function called validuserNames that
accepts an array of usernames (strings). It should return a new array, containing only the
usernames that are less than 10 characters. For example:

validuserNames (['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFar
// => ["mark", "carrie98", "MoanaFan"]
 */

//let userNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFar']

const validUserNames = (userNames) => {
    return userNames.filter(username => username.length < 10)
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFar']));