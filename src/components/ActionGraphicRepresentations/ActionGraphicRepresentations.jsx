import style from './ActionGraphicRepresentations.module.css'
import gif from './../../assets/pictures/main.gif'

const ActionGraphicRepresentations = () => {
    return (
        <div className={style.actionsWrapper}>
            <h1 className='visuallyHidden'>Action Graphic Representations </h1>
            {/*через state и props будем менять url картинки или блок*/}
            {/*<img src="http://www.weilard.com/version3/pixelart/weilard_pixelart_moonwalker.gif" alt=""/>*/}
            {/*<img src="https://cdn.dribbble.com/users/3518215/screenshots/6392718/tumblr_nwl8ddm8xo1sbycm1o1_500.gif" alt=""/>*/}
            {/*<img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375536940927/D370DBF7BFC83ED36F783F08A598FFF3E71A1D61/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt=""/>*/}
            <img src={gif} alt="city of future"/>
            {/* <div className={`${style.warning} + visuallyHidden`}> */}

            <div className={`${style.warning}`}>
                <p>WARNING! Graphic engine has been disabled by an unknown rebel group.</p>
                <p>You will not see a graphical representation of your actions on display</p>
                <p>Graphic module switched to emergency text mode.</p>
                <p>You can use text mode, until we finish all recovery works.</p>
                <p>Best regards, AITG</p>
                <br/>
                <p>Please, stand by...</p>
            </div>
        </div>
    )
}

export default ActionGraphicRepresentations;
