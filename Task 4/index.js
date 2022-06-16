const CourseData = [
    {
      photo: "/images/1.svg",
      topic: "Acceleration",
      subject: "Physics",
      grade: 7,
      gradeExtra: "+2",
      units: 4,
      lessons: 18,
      topics: 4,
      isTeacherPresent: true,
      teacher: "Mr.Frank's Class B",
      students: 50,
      duration: "4-Oct-2019 - 20-Oct-2020",
      isDull: false,
      isExpired: false,
      fav: true
    },
    {
      photo: "/images/2.svg",
      topic: "Displacement, Velocity and Speed",
      subject: "Physics 2",
      grade: 6,
      gradeExtra: "+3",
      units: 2,
      lessons: 15,
      topics: 20,
      isTeacherPresent: false,
      teacher: "No Classes",
      students: null,
      duration:null,
      isDull: true,
      isExpired: false,
      fav: true
    },
    {
      photo: "/images/3.svg",
      topic: "Introduction to Biology: Micro  organisms <br> and how they affec...",
      subject: "Biology",
      grade: 4,
      gradeExtra: "+1",
      units: 5,
      lessons: 16,
      topics: 22,
      isTeacherPresent: true,
      teacher: "All Classes",
      students: 300,
      duration:null,    
      isDull: true,
      isExpired: false,
      fav: true
    },
    {
      photo: "/images/4.svg",
      topic: "Introduction to High School Mathematics",
      subject: "Mathematics",
      grade: 8,
      gradeExtra: "+3",
      units: null,
      lessons: null,
      topics: null,
      isTeacherPresent: true,
      teacher: "Mr.Frank's Class A",
      students: 44,
      duration: "14-Oct-2019 - 20-Oct-2020",
      isDull: false,
      isExpired: true,
      fav: false
    }
  ];
  
  
  function courseTemplate(course) {
    return (`
      <div class="study">

        ${course.isExpired===true ? '<div class="exp"><p> EXPIRED </p></div>': ''}

        <div class="row1">
        
            ${course.isExpired === true ? `<img class="course-photo" style="margin-top: 12px" src="${course.photo}">`: `<img class="course-photo" src="${course.photo}">`}
            
            <div class="info">
                           
                           <p>${course.topic}</p>

                            <p id="para1"> ${course.subject} <span class="grade">&#124</span> Grade ${course.grade} ${course.gradeExtra} </p>

                            ${course.fav === true ? '<img src="/images/icons/favourite.svg" alt=""> ' : ''}

                            <p id="para2"><b>${course.units}</b> Units <b>${course.lessons}</b>  Lessons <b>${course.topics}</b> Topics </p>

                            <input list="browsers3" name="browser" class="datalist" id="browser1">
                            <datalist id="browsers3">
                                <option value="Mr. Frank's Class B">
                                <option value="Mr. Frank's Class A">
                                <option value="All Classes">
                                <option value="No Classes">
                            </datalist>
                            
                            <p id="para3"> ${course.students === null ? '' : course.students+' Students <span class="grade">&#124</span>'}   ${course.duration === null ? '': course.duration} </p> 
            </div>
            
        </div>
        
        <div class="logo">
            <img src="/images/icons/preview.svg" alt="">
            
            ${course.isDull === true ? '<img style="opacity:0.5;" src="/images/icons/grade submissions.svg" alt="">' : '<img src="/images/icons/grade submissions.svg" alt="">'}
            ${course.isDull === true ? '<img style="opacity:0.5;" src="/images/icons/reports.svg" alt="">' : '<img src="/images/icons/reports.svg" alt="">'}
            
            <img src="/images/icons/manage course.svg" alt="">
        </div>

      </div>
    `);
  }
  
  document.getElementById("app").innerHTML = `
    ${CourseData.map(courseTemplate).join("")}
 
  `;
  