// QUESTION 2

function d_merge(xs, ys) {
    const empty_list = list();
    const full_list = append(xs, ys);
    const og_list = append(xs, ys);
    function merging(lists, counter) {
        return counter === ((length(og_list) + 1) / 2) - 1
        ? lists
        : length(og_list) % 2 === 0
        ? append(lists, merging(append(list(list_ref(og_list, counter)), 
        list(list_ref(og_list, ((length(og_list) / 2) + counter)))), counter + 1))

        : append(lists, merging(append(list(list_ref(og_list, counter)), 
        list(list_ref(og_list, (((length(og_list) + 1) / 2) + counter)))), counter + 1));
        }
    return merging(empty_list, 0);
    }
    
// TEST:
const my_list1 = list(2, 4, 5, 9);
const my_list2 = list(3, 5, 8);
d_merge(my_list1, my_list2);