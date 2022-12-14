package com.spring.masinsa.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.ImageDTO;
import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.entity.Image;
import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.SoldoutStatus;
import com.spring.masinsa.mapper.MaskMapper;
import com.spring.masinsa.repository.MaskRepository;

@Service
public class MaskServiceImpl implements MaskService {
	
	@Autowired
	MaskRepository maskRepo;
	
	@Autowired
	MaskMapper maskMapper;
	
	@Override
	@Transactional
	public MaskDTO getMask(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		MaskDTO maskDTO = Mask.entityToDTO(mask);
		return maskDTO;
	}
	
	@Transactional
	public List<MaskDTO> getTop3Mask() {
		List<Mask> top3 = maskMapper.getTop3Mask();
		List<MaskDTO> top3DTO = top3.stream()
										 .map(mask -> Mask.entityToDTO(mask))
										 .collect(Collectors.toList());
		return top3DTO;
	}
	
	@Override
	@Transactional
	public MaskDTO updateSoldout(Long maskId, String soldout) {
		Mask mask = maskRepo.findMaskById(maskId);
		if(mask != null) {
			if (soldout.equals("Y")) {
				mask.updateSoldout(SoldoutStatus.Y);
		} 
			else if (soldout.equals("N")) {
				mask.updateSoldout(SoldoutStatus.N);
		}
		maskRepo.save(mask);
		MaskDTO maskDTO = Mask.entityToDTO(mask);
		return maskDTO;
		}
		return null;
	}
	
	@Override
	@Transactional
	public void updateClick(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		mask.updateClick();
		maskRepo.save(mask);
	}
	
	@Transactional
	public MaskDTO deleteMask(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		mask.deleteMask();
		maskRepo.save(mask);
		return Mask.entityToDTO(mask);
	}
	
	@Override
	@Transactional
	public List<ImageDTO> getAllImages(Long maskId) {
		List<Image> imageList = maskMapper.getAllImages(maskId);
		System.out.println(imageList);
		List<ImageDTO> imageDTOList = imageList.stream()
											.map(image -> Image.entityToDTO(image))
											.collect(Collectors.toList());
		return imageDTOList;
	}
	
	@Override
	@Transactional
	public List<MaskDTO> getAllMask(String blockingIndex, String size, String shape) {
		List<Mask> maskList = maskMapper.getAllMask(blockingIndex, size, shape);
		List<MaskDTO> maskDTOList = maskList.stream()
											.map(mask -> Mask.entityToDTO(mask))
											.collect(Collectors.toList());
		return maskDTOList;
	}
	
//	@Override
//	@Transactional
//	public List<MaskDTO> getSortedMasksPage(String col, String order, int page, int size) {
//		int limit = size;
//		int offset = (page - 1) * size;
//		// System.out.println(("col : " + col + ", order : " + order + ", limit : " + limit + ", offset : " + offset));
//		List<Mask> maskList = maskMapper.getSortedMasksByPage(col, order, limit, offset);
//		System.out.println(maskList);
//		List<MaskDTO> maskDTOList = maskList.stream()
//											.map(mask -> Mask.entityToDTO(mask))
//											.collect(Collectors.toList());
//		return maskDTOList;
//	}

	@Override //col, order, page, size, filterCol, filter
	public List<MaskDTO> FilterSortMaskByPage(String sortCol, String order, Integer page, Integer size, 
	String filterCol1, String filter1, String filterCol2, String filter2, String filterCol3, String filter3) {
		Integer limit = null;
		Integer offset = null;
		//if page, size is not null, then set limit and offset
		if (size != null) {
			limit = size;
		}
		if (page != null && size != null) {
			offset = (page - 1) * size;
		}
		List<Mask> maskList = maskMapper.FilterSortMaskByPage(sortCol, order, limit, offset, 
		filterCol1, filter1, filterCol2, filter2, filterCol3, filter3);
		System.out.println(maskList);
		List<MaskDTO> maskDTOList = maskList.stream()
											.map(mask -> Mask.entityToDTO(mask))
											.collect(Collectors.toList());
		return maskDTOList;
	}

	@Override
  public List<MaskDTO> SearchSortMask(String keyword, String sortCol, String order, Integer page, Integer size) {
		Integer limit = null;
		Integer offset = null;
		if (size != null) {
			limit = size;
		}
		if (page != null && size != null) {
			offset = (page - 1) * size;
		}

		//?????? keyword??? " "??? split?????? ????????? ?????????. ex) keyword = "????????? ?????????  " -> ["?????????", "?????????", ""]
		String[] keywords = keyword.split(" ");
		//????????? ???????????? ???????????? ?????????, ????????? keyword??? like??? ???????????? maskList??? ?????????.
		List<Mask> maskList = new ArrayList<Mask>();
		// keywords??? size?????? maskMapper.SearchSortMask??? keyword??? ????????? maskList??? ?????????.
		if (keywords.length == 1) {
			maskList = maskMapper.SearchSortMask(keywords[0], null, null, sortCol, order, limit, offset);
		} else if (keywords.length == 2) {
			maskList = maskMapper.SearchSortMask(keywords[0], null, null, sortCol, order, limit, offset);
		} else {
			maskList = maskMapper.SearchSortMask(keywords[0], keywords[1], keywords[2], sortCol, order, limit, offset);
		} 
		List<MaskDTO> maskDTOList = maskList.stream()
											.map(mask -> Mask.entityToDTO(mask))
											.collect(Collectors.toList());
		return maskDTOList;


		// for (String k : keywords) {
		// 	//check if keyword[i] is empty
		// 	if (!k.equals("")) {
		// 		List<Mask> maskListByKeyword = maskMapper.SearchSortMask(k, sortCol, order, limit, offset);
		// 		//maskList??? maskListByKeyword??? ????????????. ????????? ????????? ??????.
		// 		for (Mask mask : maskListByKeyword) {
		// 			// if mask is not null and maskList does not contain mask, then add mask to maskList
		// 			if (mask != null && !maskList.contains(mask)) {
		// 				maskList.add(mask);
		// 			}
				}
	}



