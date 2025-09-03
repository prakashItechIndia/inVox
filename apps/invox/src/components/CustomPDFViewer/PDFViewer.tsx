/* eslint-disable @typescript-eslint/restrict-template-expressions */
// Import the styles for react-pdf-viewer
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

import React, { useEffect, useRef, useState } from "react";
import {
  Viewer,
  RotateDirection,
  CharacterMap,
  SetRenderRange,
  VisiblePagesRange,
  Worker,
} from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { rotatePlugin } from "@react-pdf-viewer/rotate";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";

// Icons (lucide-react)
import { Menu, RotateCcw, RotateCw } from "lucide-react";

interface PdfProps {
  fileUrl: string;
  jumpIndex?: number;
  updateSearchPage?: (page: number) => void;
}

const PDFViewer: React.FC<PdfProps> = ({
  fileUrl,
  jumpIndex,
  updateSearchPage = () => {},
}) => {
  const viewerRef = useRef<any>(null);
  const [sidePanelOpen, setSidePanelOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const toolbarPluginInstance = toolbarPlugin();
  const thumbnailPluginInstance = thumbnailPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const rotatePluginInstance = rotatePlugin();

  const { RotatePage } = rotatePluginInstance;
  const { jumpToPage } = pageNavigationPluginInstance;
  const { Thumbnails } = thumbnailPluginInstance;
  const { Toolbar } = toolbarPluginInstance;

  const renderToolBar = (props: ToolbarSlot) => {
    const {
      CurrentPageInput,
      Download,
      GoToNextPage,
      GoToPreviousPage,
      NumberOfPages,
      Print,
      Zoom,
      ZoomIn,
      ZoomOut,
    } = props;

    return (
      <div className="flex w-full items-center gap-2 px-4">
        {/* Left: menu */}
        <div className="w-1/5 flex items-center">
          <button
            type="button"
            onClick={() => setSidePanelOpen((o) => !o)}
            className="inline-flex items-center rounded-xl p-2 hover:bg-black/10 focus:outline-none"
            aria-label="Toggle thumbnails"
            title="Toggle thumbnails"
          >
            <Menu className="h-5 w-5 opacity-60" />
          </button>
        </div>

        {/* Middle: zoom + rotate + nav + page info */}
        <div className="w-3/5 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <ZoomOut />
            <Zoom />
            <ZoomIn />

            <RotatePage>
              {(rp) => (
                <button
                  type="button"
                  onClick={() =>
                    rp.onRotatePage(currentPage, RotateDirection.Backward)
                  }
                  className="inline-flex items-center rounded-xl p-2 hover:bg-black/10 focus:outline-none"
                  aria-label="Rotate left"
                  title="Rotate left"
                >
                  <RotateCcw className="h-5 w-5 opacity-60" />
                </button>
              )}
            </RotatePage>

            <RotatePage>
              {(rp) => (
                <button
                  type="button"
                  onClick={() =>
                    rp.onRotatePage(currentPage, RotateDirection.Forward)
                  }
                  className="inline-flex items-center rounded-xl p-2 hover:bg-black/10 focus:outline-none"
                  aria-label="Rotate right"
                  title="Rotate right"
                >
                  <RotateCw className="h-5 w-5 opacity-60" />
                </button>
              )}
            </RotatePage>

            <GoToPreviousPage />
            <GoToNextPage />
            <div className="ml-2 flex items-center gap-1 text-sm">
              <CurrentPageInput />
              <span>/</span>
              <NumberOfPages />
            </div>
          </div>
        </div>

        {/* Right: download/print */}
        <div className="w-1/5 flex items-center justify-end gap-2">
          <Download />
          <Print />
        </div>
      </div>
    );
  };

  const characterMap: CharacterMap = {
    isCompressed: true,
    url: `https://unpkg.com/pdfjs-dist@3.4.120/cmaps/`,
  };

  const setRenderRange: SetRenderRange = React.useCallback(
    (visiblePagesRange: VisiblePagesRange) => {
      return {
        startPage:
          visiblePagesRange.endPage <= 20 ? 0 : visiblePagesRange.startPage - 5,
        endPage:
          visiblePagesRange.startPage <= 20
            ? Math.max(20, visiblePagesRange.endPage + 5)
            : visiblePagesRange.endPage + 5,
      };
    },
    []
  );

  const handlePageChange = React.useCallback(
    (data: { currentPage: number }) => {
      setCurrentPage(data?.currentPage);
      updateSearchPage(data?.currentPage + 1);
    },
    [updateSearchPage]
  );

  useEffect(() => {
    if (jumpIndex && jumpIndex > 0) {
      jumpToPage(jumpIndex - 1);
    }
  }, [jumpIndex, jumpToPage]);

  return (
    <div className="rpv-core__viewer flex flex-col rounded-2xl shadow-sm h-[calc(100vh-140px)]">
      {/* Toolbar */}
      <div className="flex items-center rounded-t-2xl bg-[#e5ebfa] p-1">
        <Toolbar>{(props: ToolbarSlot) => renderToolBar(props)}</Toolbar>
      </div>

      {/* Body */}
      <div className="rpv-core__viewer flex h-full border border-black/30">
        {/* Thumbnails panel */}
        <div
          className={`border-r border-black/30 overflow-auto ${sidePanelOpen ? "w-1/5" : "hidden"} md:${sidePanelOpen ? "block" : "hidden"}`}
        >
          <Thumbnails />
        </div>

        {/* Main viewer */}
        <div className="flex-1 overflow-hidden bg-[#e6e6e8]">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={fileUrl}
              defaultScale={1.2}
              ref={viewerRef}
              onPageChange={handlePageChange}
              plugins={[
                toolbarPluginInstance,
                thumbnailPluginInstance,
                pageNavigationPluginInstance,
                rotatePluginInstance,
              ]}
              enableSmoothScroll={false}
              setRenderRange={setRenderRange}
              characterMap={characterMap}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
