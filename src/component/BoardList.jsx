import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import Constants from 'expo-constants';

const BoardList = () => {
    const navigate = useNavigate();

    const [srchSubject, setSrchSubject] = useState("");
    const [srchWriter, setSrchWriter] = useState("");
    const [srchDateFrom, setSrchDateFrom] = useState("");
    const [srchDateTo, setSrchDateTo] = useState("");
    const [boardList, setBoardList] = useState();

    const [page, setPage] = useState(1);
    const [pageList, setPageList] = useState();
    const [countPerPage, setCountPerPage] = useState(5);
    const totalPage = useRef();
    const pagePerBoard = useRef(2);

    const getList = () => {
        fetch(
            `${Constants.manifest.extra.REACT_APP_API_URL}/board?page=${page}&countPerPage=${countPerPage}&srchSubject=${srchSubject}&srchWriter=${srchWriter}&srchDateFrom=${srchDateFrom}&srchDateTo=${srchDateTo}`
        ).then((res) => {
            res.json().then((json) => {
                totalPage.current = Math.ceil(json.totalCount / countPerPage);
                var _pageList = [];
                for (var i = 1; i <= totalPage.current; i++) {
                    _pageList.push(i);
                    if (i % pagePerBoard.current === 0) {
                        if (_pageList.includes(page)) {
                            break;
                        } else {
                            _pageList = [];
                        }
                    }
                }
                setPageList(_pageList);
                setBoardList(json.list);
            });
        });
    };

    useEffect(() => {}, []);

    useEffect(() => {
        getList();
    }, [page, countPerPage]);

    return (
        <View>
            {boardList && boardList.length > 0 ? (
                boardList.map((value) => (
                    <View>
                        <Text>{value.no}</Text>
                        <Text>{value.subject}</Text>
                        <Text>{value.writer}</Text>
                        <Text>{value.date}</Text>
                    </View>
                ))
            ) : (
                <Text>데이터가 없습니다.</Text>
            )}
        </View>
    );
};

export default BoardList;
