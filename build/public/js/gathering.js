const commentss=[{
    username:"user1",
    comment:"this is a comment",
    timeposted: 4 ,
    votes:0
},{
username:"user2",
comment:"this is a comment",
timeposted: 5,
votes:10

}

]

const post={
    profilepic:"//uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    username:"Steven Hert",
    question:"How to grow tomatoes?",
    description:"i have been trying to grow tomatoes for a while now but i cant seem to get it right. i have tried it keeps on dying",
    questionimage:"https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?w=1380&t=st=1705091194~exp=1705091794~hmac=2f2505e0ef1b57eb4277b0b1312878e618e571421407133290f4380310d51b3c",
    timeposted: 4 ,

}

const currentuser={

    profilepic:"https://img.icons8.com/wired/64/circled-user.png"
}


function commentcontaner (comments){
    return `
                        <hr>
                        <div class="d-flex flex-row align-items-center commented-user">
                            <h5 class="mr-2">${comments.username}</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">${comments.timeposted} hours
                                ago</span>
                        </div>
                        <div class="comment-text-sm"><span>${comments.comment}</span></div>
                        <div class="reply-section">
                            <div class="d-flex flex-row align-items-center voting-icons">


                                <div class="forum-icon profile-pic"><img class="  rounded-circle mid-icon imgicon" src="//uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png"></img></div>

                                <i
                                    class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i
                                    class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">${comments.votes}</span><span
                                    class="dot ml-2"></span>
                                <h6 class="ml-2 mt-1">Vote</h6>
                            </div>
                        </div>
                        
    `

  }   


const commentContainerlist = document.getElementById("commentsection");
commentss.forEach((item) => {
    let postHTML = commentcontaner(item);
    commentContainerlist.innerHTML += postHTML;
});


document.getElementById("profilename").innerHTML=post.username;
document.getElementById("mainquestion6").innerHTML=post.question;
document.getElementById("mainquestion").innerHTML=post.description;
document.getElementById("profilepic").src=post.profilepic;
document.getElementById("questionimage").src=post.questionimage;
document.getElementById("postime").innerHTML=post.timeposted;
document.getElementById("profileimage2").src=currentuser.profilepic;