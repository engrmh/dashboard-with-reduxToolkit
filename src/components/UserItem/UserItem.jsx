import React from "react";
import {useDispatch} from "react-redux";
import {removeUser} from "../../Redux/Store/Users.jsx";
import swal from "sweetalert";

export default function UserItem({firstname , lastname , email , image= 'https://robohash.org/hicveldicta.png' , _id }) {
    const dispatch = useDispatch()
    const removeHandler = () => {
        swal({
            title: 'مطمئنی؟',
            icon: 'warning',
            buttons: ['نه' , 'آره'],
        }).then((res) => {
            if (res){
                dispatch(removeUser(_id))
                swal({
                    title: 'کاربر با موفقیت حذف شد',
                    icon: 'success',
                    button: 'بسیار خوب'
                })
            }
        })
    }
  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src={image}
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0">{firstname} {lastname}</p>
          <p lang="en" className="users__email">
              {email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button className="btn-custome btn-custome__red" onClick={removeHandler}>حذف</button>
      </div>
    </div>
  );
}
