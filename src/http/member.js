import request from "./axios";

export function getMemberPage(data){
	return request({
		url: '/mall/ums-member/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/ums-member/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/ums-member/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/ums-member/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/ums-member/edit',
		method: 'post',
		data
	});
}

