import Vue from 'vue';
import Filters from './filters';
import Loading from './loading';
import Mixins from './mixins';
import './rem';

Vue.use(Filters);
Vue.use(Loading);
Vue.mixin(Mixins);
