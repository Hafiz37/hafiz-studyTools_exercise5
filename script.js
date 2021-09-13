alert('anda bisa memasukkan \n username github anda di navbar.,.!')

function cariApi(){
    let cariUsername =document.getElementById('cariUsername').value
    // let cariUsername = prompt('kosongkan atau anda juga bisa memasukkan username github anda')


    let apiGitHub = ('https://api.github.com/users/hafiz37')

    if(cariUsername == '' || cariUsername == null){
        apiGitHub = ('https://api.github.com/users/hafiz37')
    } else {
        apiGitHub = ('https://api.github.com/users/' + cariUsername)
    }


    let data = (() => {
        fetch(apiGitHub)
        .then((response) => response.json())
        .then(function(result){
            
            // link di navbar
            let linkGithub = document.getElementById('brand-navbar')
            let username = document.getElementById('username-GitHub')
            linkGithub.href = result.html_url
            username.innerHTML = result.login

            // foto profile
            let image = document.createElement("img")
            image.src = result.avatar_url
            document.getElementById('avatar-GitHub').innerHTML = ''
            let avatar = document.getElementById('avatar-GitHub').appendChild(image)

            // let avatar = document.getElementById('avatar-GitHub')
            // avatar.appendChild = image.src

            // nama
            let nama = document.getElementById('nama-GitHub')
            nama.innerHTML = result.name

            // id github
            let id = document.getElementById('id-GitHub')
            id.innerHTML ='id : ' + result.id

            // about me
            let bio = document.getElementById('bio-GitHub')
            bio.innerHTML = `" ${result.bio} "`  

            // alamat
            let alamat = document.getElementById('alamat-GitHub')
            if(alamat == null || alamat == ''){
                alamat.innerHTML = `sekarang saya tinggal di sini`
            } else {
                alamat.innerHTML = `sekarang saya tinggal di ${result.location}`
            }

          // repo publik
          let repoPublik = document.getElementById('repoPublik-GitHub')
          repoPublik.innerHTML = `${result.public_repos} <br>repository public`

          // followers
          let followers = document.getElementById('followers-GitHub')
          followers.innerHTML =  `${result.followers} <br>followers`  
          
          
          // followers
          let following = document.getElementById('following-GitHub')
          following.innerHTML =  `${result.following} <br>following`  


            let urlGithub = document.getElementById('url-GitHub')
            console.log(result);


        })
        .catch(function(error){
            console.log( 'ada error ' +  error);
        })
    })

    data()


}



















    // let cariUsername = prompt('kosongkan atau anda juga bisa memasukkan username github anda')
    let apiGitHub = ('https://api.github.com/users/hafiz37')
    let cariUsername =document.getElementById('cariUsername')

    // if(cariUsername == '' || cariUsername == null){
    //     apiGitHub = ('https://api.github.com/users/hafiz37')
    // } else {
    //     apiGitHub = ('https://api.github.com/users/' + cariUsername)
    //     console.log("a");
    // }


    let data = (() => {
        fetch(apiGitHub)
        .then((response) => response.json())
        .then(function(result){
            
            // link di navbar
            let linkGithub = document.getElementById('brand-navbar')
            let username = document.getElementById('username-GitHub')
            linkGithub.href = result.html_url
            username.innerHTML = result.login

            // foto profile
            let image = document.createElement("img")
            image.src = result.avatar_url
            let avatar = document.getElementById('avatar-GitHub').appendChild(image)

            // nama
            let nama = document.getElementById('nama-GitHub')
            nama.innerHTML = result.name

            // id github
            let id = document.getElementById('id-GitHub')
            id.innerHTML ='id : ' + result.id

            // about me
            let bio = document.getElementById('bio-GitHub')
            bio.innerHTML = `" ${result.bio} "`  

            // alamat
            let alamat = document.getElementById('alamat-GitHub')
            if(alamat == null || alamat == ''){
                alamat.innerHTML = `sekarang saya tinggal di sini`
            } else {
                alamat.innerHTML = `sekarang saya tinggal di ${result.location}`
            }

            // repo publik
            let repoPublik = document.getElementById('repoPublik-GitHub')
            repoPublik.innerHTML = `${result.public_repos} <br>repository public`

            // followers
            let followers = document.getElementById('followers-GitHub')
            followers.innerHTML =  `${result.followers} <br>followers`  
            
            
            // followers
            let following = document.getElementById('following-GitHub')
            following.innerHTML =  `${result.following} <br>following`  



            let urlGithub = document.getElementById('url-GitHub')
            console.log(result);


        })
        .catch(function(error){
            console.log( 'ada error ' +  error);
        })
    })

    data()

