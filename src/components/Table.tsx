import { useTable, Column, TableOptions, useSortBy, usePagination } from "react-table"


function Table<T extends object>(
    columns: Column<T>[],
    data: T[],
    containerClassname: string,
    heading: string,
    showPagination: boolean = false
) {
    return function HOC() {

        const options: TableOptions<T> = {
            columns,
            data,
            initialState: {
                pageSize: 4
            }
        }
        const {
            getTableProps,
            pageCount,
            state: { pageIndex },
            getTableBodyProps,
            headerGroups,
            page,
            prepareRow,
            nextPage,
            previousPage,
            canNextPage,
            canPreviousPage
        } = useTable(options, useSortBy, usePagination)

        return <div className={containerClassname}>
            <h2>{heading}</h2>

            <table className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th{...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render("Header")}
                                            {
                                                column.isSorted &&
                                                (
                                                    <span>
                                                        {column.isSortedDesc ? "⬇️" : "⬆️"}
                                                    </span>
                                                )
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row);
                            return <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
            {
                showPagination && <div className="table-pagination">
                    <button disabled={!canPreviousPage} onClick={previousPage}>
                        Prev
                    </button>
                    <span> {`${pageIndex + 1} of ${pageCount}`}</span>
                    <button disabled={!canNextPage} onClick={nextPage}>
                        Next
                    </button>

                </div>
            }
        </div>
    }
}
export default Table
