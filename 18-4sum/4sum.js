var fourSum = function(nums, target) {

    nums.sort((a,b)=>a-b);

    let arr=[];

    for(let i=0;i<nums.length-3;i++){

        if(i>0 && nums[i]===nums[i-1]) continue;

        for(let j=i+1;j<nums.length-2;j++){

            if(j>i+1 && nums[j]===nums[j-1]) continue;

            let k=j+1;
            let m=nums.length-1;

            while(k<m){

                let sum=nums[i]+nums[j]+nums[k]+nums[m];

                if(sum===target){

                    arr.push([nums[i],nums[j],nums[k],nums[m]]);

                    while(k<m && nums[k]===nums[k+1]) k++;
                    while(k<m && nums[m]===nums[m-1]) m--;

                    k++;
                    m--;
                }
                else if(sum<target){
                    k++;
                }
                else{
                    m--;
                }
            }
        }
    }

    return arr;
};