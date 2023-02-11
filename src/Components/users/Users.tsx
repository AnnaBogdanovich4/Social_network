import style from './Users.module.css'
import {ContainerAva} from './Ava/ContainerAva';
import {StoreContext} from '../../StoreContext';

export const Users = () => {
    return (
        <StoreContext.Consumer>
            {(store) => (
                <div className={style.users}>
                    <div className={style.user}>
                        {store.getState().usersPage.users.map(el =>
                            <ContainerAva key={el.userId}
                                          src={el.src}
                                          id={el.userId}
                                          status={el.status}
                                          name={el.name}
                                          info={el.info}
                                          country={el.country}
                                          city={el.city}/>)
                        }
                    </div>
                    <button className={style.button}>Show more</button>
                </div>
            )}
        </StoreContext.Consumer>
    )
}
