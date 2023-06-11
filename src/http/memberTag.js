import request from "./axios";

export function getMemberTagPage(data){
	return request({
		url: '/mall/ums-member-tag/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/ums-member-tag/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/ums-member-tag/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/ums-member-tag/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/ums-member-tag/edit',
		method: 'post',
		data
	});
}

