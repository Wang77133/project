import request from "./axios";

export function getLevelPage(data){
	return request({
		url: '/mall/ums-member-level/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/ums-member-level/one/${id}`,
		method: 'get'
	});
}

export function delOne(id){
	return request({
		url: `/mall/ums-member-level/del/${id}`,
		method: 'get',
	});
}

export function addOne(data){
	return request({
		url: '/mall/ums-member-level/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/ums-member-level/edit',
		method: 'post',
		data
	});
}

