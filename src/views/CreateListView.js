import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function creatListView(name) {
    return {
        // 재사용 컴포넌트 옵션
        name: name,
        created() {
            bus.$emit('start:spinner');

            this.$store
                .dispatch('fetchList', this.$route.name)
                .then(() => bus.$emit('end:spinner'))
                .catch(error => {
                    console.log(error);
                });
        },
        render(creatElement) {
            return creatElement(ListView);
        }
    };
}
