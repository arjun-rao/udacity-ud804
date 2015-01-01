var bio = 
{
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "111-111-1111",
        "email": "me@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "Cupertino, CA"
	},
	"picture": "images/fry.jpg",
	"welcome": "Welcome to my homepage",
	"skills" : ["C/C++","PHP","MYSQL","JS","jQuery","AJAX"]

};



var work = {
    "jobs": [
        {
            "employer": "Google",
            "title": "CEO",
            "location": "Mountain View, CA",
            "dates": "2004 - 2008",
            "description": "Did some work here"
        },
        {
            "employer": "MongoDB",
            "title": "DB Admin",
            "location": "New York",
            "dates": "2008 - 2012",
            "description": "Did Some work here."
        }
    ]
};



var education = {
	"schools": [
        {
            name: "University of Something",
            location: "Cupertino, CA",
            degree: "B.S.",
            dates: "2014 - 2014",
            majors: [
                "Computer Science",
                "Math"
            ]
        }
	],
	"onlineCourses":[
		{
			"title":"CS50x",
			"school":"Edx",
			"dates": 2014,
		}
		,
		{
			"title":"JS Intro",
			"school":"Udacity",
			"dates": 2014,
		}

	]
};


var projects  = {
	"projects":[
		{
			"title": "SomeProject",
			"dates": 2014,
			"description":"Some thing",
			"images":[
			"images/proj.gif","images/proj.gif"
			]
		},
		{
			"title": "SomeProject 2",
			"dates": 2014,
			"description":"Some thing else",
			"images":[
			"images/proj.gif","images/proj.gif"
			]

		}
	]
};


var c = "%contact%";
var d = "%data%";

var formattedBioPic = HTMLbioPic.replace(d, bio.picture);
var formattedName = HTMLheaderName.replace(d, bio.name);
var formattedRole = HTMLheaderRole.replace(d, bio.role);


$("#header").prepend(formattedRole);
$("#main").prepend(formattedBioPic);
$("#header").prepend(formattedName);

for (var i in bio.contacts) {
    var formattedContactInfoItem = HTMLcontactGeneric.replace(d, bio.contacts[i]);
    formattedContactInfoItem = formattedContactInfoItem.replace(c, i);
    $("#topContacts").append(formattedContactInfoItem);
}

$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills;
for(var i in bio.skills){
	formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedSkill);
}

//projects
$("#projects").append(HTMLprojectStart);
for (var p in projects.projects) {
    
    
    var formattedProjectTitle = HTMLprojectTitle.replace(d, projects.projects[p].title);
    var formattedProjectDates = HTMLprojectDates.replace(d, projects.projects[p].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace(d, projects.projects[p].description);
    
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    
    //images
    for (var img in projects.projects[p].images) {
        var formattedProjectImage = HTMLprojectImage.replace(d, projects.projects[p].images[img]);
        $(".project-entry:last").append(formattedProjectImage);
    }
    
}


//Education
$("#education").append(HTMLschoolStart);
for (var s in education.schools) {
    var formattedSchoolName = HTMLschoolName.replace(d, education.schools[s].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace(d, education.schools[s].degree);
    var formattedSchoolDates = HTMLschoolDates.replace(d, education.schools[s].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(d, education.schools[s].location);
    
    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    
    for (var m in education.schools[s].majors) { 
        var formattedSchoolMajor = HTMLschoolMajor.replace(d, education.schools[s].majors[m]);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
}

var HTMLonlineStart = '<div class="education-entry" id="online-entry"></div>';
$("#education").append(HTMLonlineStart);
$("#online-entry").append(HTMLonlineClasses);
for (var s in education.onlineCourses) {
    
    var formattedOnlineSchool = HTMLonlineSchool.replace(d, education.onlineCourses[s].school);
    //var formattedOnlineURL = HTMLonlineURL.replace(d, education.onlineCourses[s].url);
    var formattedOnlineTitle = HTMLonlineTitle.replace(d, education.onlineCourses[s].title);
    var formattedOnlineDates = HTMLonlineDates.replace(d, education.onlineCourses[s].dates);

    $("#online-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    $("#online-entry:last").append(formattedOnlineDates);
    $("#online-entry:last").append("<br>");
    //$(".online-entry:last").append(formattedOnlineURL);
}

//Work Experience
function displayWork()
{
	$("#workExperience").append(HTMLworkStart);
	for(i in work.jobs)
	{	
		var formattedEmployer = HTMLworkEmployer.replace(d,work.jobs[i].employer);	
		var formattedTitle = HTMLworkTitle.replace(d,work.jobs[i].title);	
		var formattedDates = HTMLworkDates.replace(d,work.jobs[i].dates);	
		var formattedLocation = HTMLworkLocation.replace(d,work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace(d,work.jobs[i].description);
		$(".work-entry").append(formattedEmployer + formattedTitle);
		$(".work-entry").append(formattedDates);
		//$(".work-entry").append(formattedLocation);
		$(".work-entry").append(formattedDescription);
	}
}

displayWork();



$(document).click(function(loc) 
{ 
	logClicks(loc.pageX,loc.pageY);

});


$("#main").append(internationalizeButton);

function inName (fullname)
{
	var names = fullname.split(" ");
	var newname=[names[0].slice(0,1).toUpperCase() + names[0].slice(1),names[1].toUpperCase()];
	var intlname = newname.join(" ");
	return intlname	;
}

$("#mapDiv").append(googleMap);


