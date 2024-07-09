
function register(){    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('userPw').value;
    const confirmPassword = document.getElementById('checkPw').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hobby = document.getElementById('hobby').value;
    const addr = document.getElementById('addr').value;

    const userIdRegex = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const nameRegex = /^[가-힣]{2,}$/;

    if(!userIdRegex.test(userId)){
        alert('아이디는 첫 글자가 영문자이고, 영문자와 숫자를 포함하여 4~12자로 입력하시오.');
        userId ="";
        userId.focus();
        return false;
    }

    if(!passwordRegex.test(password)){
        alert('비밀번호는 영문자, 숫자, 특수문자를 포함하여 8~15자로 입력하시오.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('비밀번호 확인이 일치하지 않습니다.');
        return false;
    }

    if (!nameRegex.test(name)) {
        alert('이름은 한글로만 이루어져 있으며, 2글자 이상으로 입력하시오.');
        return false;
    }

    

    alert('회원가입이 완료되었습니다!');
    alert(`${userId}`);

    console.log(userId,password,confirmPassword,name,email,hobby,addr);

    return true;

}


        

