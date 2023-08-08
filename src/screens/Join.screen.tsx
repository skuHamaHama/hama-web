import React, { useState, useEffect} from 'react';

// interface postJoinReq {
//   id: string;
//   verifyCodeId: number;
//   password: string;
//   nickname: string;
//   bDay: number;
// }

// interface postJoinRes {
//   accessToken: string;  //로컬스토리지
//   refreshToken: string;  //쿠키
// }

export const Join: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(event.target.value);
  };

  // const handleSubmit = () => {
  //   const match = password === confirmedPassword;
  //   setPasswordMatch(match);
  // };

  // const onJoin = async () => {
  //   const joinReq: postJoinReq = {
  //     id: email,
  //     verifyCodeId: code,
  //     password: password,
  //     nickname: nickname,
  //     bDay: birthday
  //   }
  // }

  useEffect(() => {
    const match = password === confirmedPassword;
    setPasswordMatch(match);
  }, [password, confirmedPassword]);

  return (
    <div>
      <br/>
      <label>
        비밀번호:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br/>
      <br/>
      <label>
        비밀번호 확인:
        <input type="password" value={confirmedPassword} onChange={handleConfirmedPasswordChange} />
      </label>
      {/* <button onClick={handleSubmit}>확인</button> */}
      {passwordMatch && <p>비밀번호가 일치합니다.</p>}
      {!passwordMatch && confirmedPassword !== '' && <p>비밀번호가 일치하지 않습니다.</p>}
    </div>
  );
}
