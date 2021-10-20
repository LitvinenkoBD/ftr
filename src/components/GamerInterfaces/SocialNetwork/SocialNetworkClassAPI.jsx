import React from "react";
import * as axios from "axios";
import SocialNetwork from "./SocialNetwork";

class SocialNetworkClassAPI extends React.Component {

    // constructor официально не является методом жизненного цикла,
    // но по сути, он говорит, что компонент сконструировался.
    // Компонент, при переходе на другую страницу стирается из памяти,
    // но пока действия происходят на этой странице, то только повторно вызывется рендер(),
    // конструктор запускается только один раз при заходе на эту страницу.
    // constructor(props) {
    //     super(props);
    // }
    // даем инструкции на событие - компонента вмонтирована
    componentDidMount() {
        let countRequest = "count=" + this.props.pageSize;
        let pageRequest = "page=" + this.props.currentPage;
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users?" + countRequest + "&" + pageRequest).then(response => {
                this.props.setUsers(response.data.items);
            });
        }
        ;
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsersCount(response.data.totalCount)
        });
    }

    // Создаем свой метод на клик по страничкам
    onPagesClick = (page) => {
        this.props.setCurrentPage(page);

        let countRequest = "count=" + this.props.pageSize;
        let pageRequest = "page=" + page; // здесь берем page тк setCurrentPage еще не долетел до стора, а мы уже делаем запрос
        axios.get("https://social-network.samuraijs.com/api/1.0/users?" + countRequest + "&" + pageRequest).then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        return (
           <SocialNetwork
               mark={this.props.mark}
               unmark={this.props.unmark}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               isFetching={this.props.isFetching}
               onPagesClick={this.onPagesClick}/>
        )
    }
}

export default SocialNetworkClassAPI;
