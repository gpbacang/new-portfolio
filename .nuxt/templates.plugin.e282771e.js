import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faCookieBite as fortawesomefreesolidsvgicons_faCookieBite } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faCookieBite)

    import  { faCommentDots as fortawesomefreesolidsvgicons_faCommentDots } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faCommentDots)

    import  { faEnvelope as fortawesomefreesolidsvgicons_faEnvelope } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faEnvelope)

    import  { faGrinWink as fortawesomefreesolidsvgicons_faGrinWink } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faGrinWink)

    import  { faHeart as fortawesomefreesolidsvgicons_faHeart } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faHeart)

    import  { faAt as fortawesomefreesolidsvgicons_faAt } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faAt)

    import  { faPhone as fortawesomefreesolidsvgicons_faPhone } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faPhone)

    import  { faDev as fortawesomefreebrandssvgicons_faDev } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faDev)

    import  { faFacebook as fortawesomefreebrandssvgicons_faFacebook } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faFacebook)

    import  { faTwitter as fortawesomefreebrandssvgicons_faTwitter } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faTwitter)

    import  { faInstagram as fortawesomefreebrandssvgicons_faInstagram } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faInstagram)

    import  { faYoutube as fortawesomefreebrandssvgicons_faYoutube } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faYoutube)

    import  { faGithub as fortawesomefreebrandssvgicons_faGithub } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faGithub)

    import  { faLinkedinIn as fortawesomefreebrandssvgicons_faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faLinkedinIn)

    import  { faDribbble as fortawesomefreebrandssvgicons_faDribbble } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faDribbble)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
