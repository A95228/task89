import React, {useEffect} from 'react';
import HeaderBar from "./HeaderBar";
import {Grid, Typography, Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import body_1_img from '../Assets/Img/hero_illustration.png'
import frame_wave_blue from '../Assets/Img/frame_wave_blue.png'
import body3_illustration from '../Assets/Img/body3_illustration.png'
import frame_wave_green from '../Assets/Img/frame_wave_green.png'
import body3_line from '../Assets/Img/body3_line.png'
import FooterLogo from '../Assets/Logo/FooterLogo.svg'
import ReactPlayer from "react-player"

const useStyles = makeStyles((theme) => ({
    container: {
        background: '#F2F2F2',
        paddingTop: 60,
        [theme.breakpoints.down('md')]: {
            paddingTop: 30,
        },
    },
    center: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    body1_container:{
        paddingLeft:70,
        [theme.breakpoints.down('md')]: {
            padding:20,
            paddingLeft: 40,

        },
    },
    body1_typo: {
        color: '#EB5757',
        fontFamily: 'roboto slab',
        fontSize: 76,
        paddingTop: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize: 56,
        },
    },
    body1_typo1: {
        color: '#424242',
        fontFamily: 'Roboto, sans-serif;',
        fontSize: 24,
        paddingTop: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize: 18,
        },

    },
    body1_img_container: {
        paddingTop: 50,
        width:'100%',
        [theme.breakpoints.up('sm')]: {
            padding: 70
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40
        },
    },
    signButton: {
        background: '#ffbc6d',
        color: 'white',
        marginRight: 10,
        fontSize: 24,
        fontWeight: 'bold',
        width: '60%',
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            fontSize: 17,
        },
    },
    body2_container: {
        backgroundImage: `url(${frame_wave_blue})`,
        backgroundRepeat: 'no-repeat',
        height: 120,
        marginTop: 30,
        paddingLeft: 70,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 40,
        },

    },
    body2_sub_container: {
        left: 0,
        paddingLeft: 70,
        backgroundColor: '#2F7686',
        height:1150,
        [theme.breakpoints.down('xs')]: {
            paddingLeft:40,
            paddingRight: 20,
            height:1600,
        },
        [theme.breakpoints.down('md')]: {
            height:1350
        },
        [theme.breakpoints.down('sm')]: {
            height:1500
        },
    },
    body2_title_typo: {
        color: "#F2F2F2",
        paddingTop: 40,
        [theme.breakpoints.down('xs')]: {
            fontSize: 40,
        },
    },
    body2_title_content: {
        color: "#F2F2F2",
        paddingTop: 20,
        lineHeight: 1.5,
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
    },
    videoPlay: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        margin: 30,
        [theme.breakpoints.down('xs')]: {
            margin: 10,
        },
    },
    body3_container: {
        backgroundImage: `url(${frame_wave_green})`,
        backgroundRepeat: 'no-repeat',
        height: 120,
        paddingLeft:70,
        marginTop:-150,
        [theme.breakpoints.down('xs')]: {
            marginTop:'-60px!important',
            paddingLeft:40
        },
        [theme.breakpoints.down('md')]: {
            paddingRight:20,
            marginTop:-200,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop:-200
        },
    },
    body3_sub_container: {
        width: '100%',
        paddingBottom:50,
        height: '100%',
        backgroundColor: '#27AE60',

    },
    body3_faq_img_container: {
        paddingTop: 50,
        paddingLeft: 70,
        [theme.breakpoints.down('xs')]: {
            width: '255px!important',
            paddingLeft: 40,
        },
        [theme.breakpoints.down('sm')]: {
            width: '240px!important',
        },
        [theme.breakpoints.down('md')]: {
            width: 300,
        },
        [theme.breakpoints.up('md')]: {
            width: 400,
        },
    },
    body3_list_item_title: {
        fontSize: 25,
        color: "#F2F2F2",
        marginLeft: 70,
        paddingTop: 35,
        paddingRight:15,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 40,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:20
        },
    },
    body3_list_item_content: {
        fontSize: 18,
        color: "#F2F2F2",
        marginLeft: 70,
        paddingRight: 30,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 40,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:15
        },
    },
    body3_line_image:{
        height:700,
        width:8,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    footerContainer: {
        background: "#F2F2F2",
    },
    footerLogo:{
        margin:20
    },
    footer_customer:{
        color:'#424242',fontWeight:400,fontSize:24,
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px!important',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 20,
        },
    },
}));

function LandingPage(props) {
    useEffect(()=>{
        console.log("this is window width",window.innerWidth)
    },[window.innerWidth])
    console.log("this is window width",window.innerWidth)

    const classes = useStyles()
    return (
        <>
            <div className={classes.container}>
                <HeaderBar/>
                {/*body 1*/}
                {/*-------------------------------------------------------*/}
                <Grid container>
                    <Grid item sm={12} md={6} className={classes.body1_container}>
                        <Typography className={classes.body1_typo}>Shop with ease with verified identify</Typography>
                        <Typography className={classes.body1_typo1}>Create a token dolor sit amet,<br/> based on
                            patented technology.</Typography>
                        <Button className={classes.signButton} variant={"contained"}>SIGN UP NOW</Button>
                    </Grid>
                    <Grid item sm={12} md={6} className={classes.body1_img_container}>
                        <img src={body_1_img} alt="Body 1 image" style={{width:'inherit'}}/>
                    </Grid>
                </Grid>
                {/*body 2*/}
                {/*-------------------------------------------------------*/}
                <div className={classes.body2_container} id="howitwork">
                    <Typography className={classes.body2_title_typo} variant={"h2"}>How it works?</Typography>
                </div>
                <div className={classes.body2_sub_container}>
                    <Typography className={classes.body2_title_content} variant={"h5"}>
                        MyIDToken is new service that quidem tibi studiose et diligenter tractandos magnopere
                        censeo.
                        <br/> Si verbum sequimur, primum longius verbum praepositum quam bonum. Sed hoc sane
                        concedamus.
                        <br/> Si enim ad populum me vocas, eum.<br/><br/>
                        <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si
                        placet.
                        <br/>Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.
                        <br/>Illis videtur, qui illud non dubitant bonum dicere -; Negat enim summo bono afferre
                        incrementum diem.
                        <br/>Oratio me istius philosophi non offendit; Duo Reges: constructio
                        interrete.</Typography>
                    <Typography className={classes.body2_title_typo} variant={"h2"} align={"center"}
                                style={{marginTop: 10, paddingLeft: 0}}>See video how it works</Typography>
                    <div className={classes.videoPlay}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                        />
                    </div>
                    <div className={classes.center}><Button className={classes.signButton} variant={"contained"}>SIGN
                        UP NOW</Button></div>
                </div>
                {/*body 3*/}
                {/*-------------------------------------------------------*/}
                <div className={classes.body3_container} id="faq">
                    <Typography className={classes.body2_title_typo} variant={"h2"}>FAQ</Typography>
                </div>
                <div className={classes.body3_sub_container}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={5}>
                            <img src={body3_illustration} alt="body3Faqimage"  className={classes.body3_faq_img_container}/>

                            <li className={classes.body3_list_item_title}>Why do we have to use a
                                token?
                            </li>

                            <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Atque hoc loco similitudines eas, quibus
                                illi uti solent, dissimillimas proferebas.</p>

                            <li className={classes.body3_list_item_title}>How will the token be used?</li>

                            <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Summus dolor plures dies manere non potest?
                                Restinguet citius, si ardentem acceperit. Sed ego in hoc resisto; Aliena dixit
                                in physicis nec ea ipsa, quae tibi probarentur; Habent enim et bene longam et
                                satis litigiosam disputationem.</p>


                        </Grid>
                        <Grid item xs={12} sm={6} md={7} style={{display: 'flex', paddingRight: 15}}>
                            <img src={body3_line} alt=""  className={classes.body3_line_image}/>
                            <div>

                                <li className={classes.body3_list_item_title}>What if I am not able to verify
                                    the ID token?
                                </li>

                                <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Quare attende, quaeso. Huic mori optimum esse
                                    propter desperationem sapientiae, illi propter spem vivere. Universa enim
                                    illorum ratione cum tota vestra confligendum puto. Sine ea igitur iucunde
                                    negat posse se vivere? Quae similitudo in genere etiam humano apparet. Quem
                                    Tiberina descensio festo illo die tanto gaudio affecit, quanto L.</p>

                                <li className={classes.body3_list_item_title}>Can you use it with your phone?
                                </li>

                                <p className={classes.body3_list_item_content}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <li className={classes.body3_list_item_title}>
                                    How many tokens are available?
                                </li>

                                <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Non quaero, quid dicat, sed quid convenienter
                                    possit rationi et sententiae suae dicere.</p>

                                <li className={classes.body3_list_item_title}>What are the benefits of using ID
                                    token?
                                </li>

                                <p className={classes.body3_list_item_content}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo adhuc, quantum
                                    equidem intellego, causa non videtur fuisse mutandi nominis.</p>


                            </div>


                        </Grid>
                    </Grid>
                </div>

                {/*footer*/}
                {/*-------------------------------------------------------*/}

                <div className={classes.footerContainer}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={FooterLogo} alt="" width={150} className={classes.footerLogo}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{marginTop:20,fontFamily:'roboto'}}>
                                        <span style={{color:'#311b6e',fontWeight:'bold',fontSize:30}}>MyID</span>
                                        <span style={{color:'#ff0000',fontWeight:500,fontSize:30}}>Token</span>
                                    </div>
                                    <span style={{color:'#424242',fontWeight:400,fontSize:25}}>+365###</span>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{marginTop:20}} className={classes.footer_customer}>Customer service:</div>
                                    <div className={classes.footer_customer}>support@myidtoken.com</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
