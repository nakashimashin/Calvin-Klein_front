// 'use client'
// import { AiFillLock, AiFillMail } from "react-icons/ai";
// import { FaUser } from "react-icons/fa";
// import "./form.css";
// import { useForm } from "react-hook-form";

// //ログインフォームの型を定義
// interface LoginForm {
//     username: string;
//     email: string;
//     password: string;
// }


// function Log() {
//   // useForm関数を呼び出して、各種設定を行う
//   const {
//         register,
//         handleSubmit,
//         formState: {errors},
//   } = useForm<LoginForm>({ mode: "onChange" }); //mode: "onChange"で入力時バリデーション

//   //フォームのsubmitイベントで呼ばれる関数
//   const onSubmit = (data: LoginForm) => console.log(data);
  
//   return (
//     <>
//       <section>
//         <h1>Login From</h1>
//         <form>
//           <label htmlFor="username">
//             <FaUser color="#888888" />
//             ユーザー名
//           </label>
//           <input
//             id="username"
//             type="text"
//             placeholder="username"
//             {...register("username", {
//                 required: "ユーザー名を入力して下さい",
//                 minLength: {value:5, message: "5文字以上で入力して下さい"}
//             })}
//           />
//           <p>{errors.username?.message as React.ReactDOM}</p>

//           <label htmlFor="email">
//             <AiFillMail color="#888888" />
//             メールアドレス
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="email"
//           />

//           <label htmlFor="password">
//             <AiFillLock color="#888888" />
//             パスワード
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="password"
//           />

//           <button type="submit">登録</button>
//         </form>
//       </section>
//     </>
//   );
// }

// export default Log;


