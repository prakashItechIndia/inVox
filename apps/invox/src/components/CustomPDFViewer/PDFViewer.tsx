/* eslint-disable @typescript-eslint/restrict-template-expressions */
// Import the styles for react-pdf-viewer
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

import {
  CharacterMap,
  RotateDirection,
  SetRenderRange,
  Viewer,
  VisiblePagesRange,
  Worker,
} from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { rotatePlugin } from "@react-pdf-viewer/rotate";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import React, { useEffect, useRef, useState } from "react";

// Icons (lucide-react)
import { Button } from "@shared/components/ui/button";
import { Separator } from "@shared/components/ui/separator";
import { Menu, RotateCcw, RotateCw } from "lucide-react";
import PageTitle from "../page-title";

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
      // Download,
      // GoToNextPage,
      // GoToPreviousPage,
      NumberOfPages,
      // Print,
      Zoom,
      ZoomIn,
      ZoomOut,
    } = props;

    return (
      <div className="flex w-full items-center gap-2 px-4 text-white">
        {/* Left: menu */}
        <div className="w-1/5 flex items-center">
          <Button
            type="button"
            onClick={() => setSidePanelOpen((o) => !o)}
            className="inline-flex items-center rounded-xl p-2 hover:bg-black/10 focus:outline-none text-white"
            aria-label="Toggle thumbnails"
            title="Toggle thumbnails"
            variant={"ghost"}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <PageTitle title="example.pdf" />
        </div>

        {/* Middle: zoom + rotate + nav + page info */}
        <div className="w-3/5 flex items-center justify-center">
          <div className="ml-2 flex items-center gap-1 text-sm">
            <CurrentPageInput />
            <span>/</span>
            <NumberOfPages />
          </div>
          <Separator
            orientation="vertical"
            className="border-dividerColor !h-8 mx-4"
          />
          <div className="flex items-center gap-3 !text-white">
            <ZoomOut>
              {(props) => (
                <button
                  onClick={props.onClick}
                  className="text-white"
                  title="Zoom Out"
                >
                  -
                </button>
              )}
            </ZoomOut>
            <Zoom />
            <ZoomIn>
              {(props) => (
                <button
                  onClick={props.onClick}
                  className="text-white"
                  title="Zoom Out"
                >
                  +
                </button>
              )}
            </ZoomIn>
            <Separator
              orientation="vertical"
              className="border-dividerColor !h-8 mx-4"
            />

            <RotatePage>
              {(rp) => (
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() =>
                    rp.onRotatePage(currentPage, RotateDirection.Backward)
                  }
                  className="inline-flex items-center rounded-xl p-2 hover:bg-black/10 focus:outline-none"
                  aria-label="Rotate left"
                  title="Rotate left"
                >
                  <RotateCcw className="h-5 w-5" />
                </Button>
              )}
            </RotatePage>

            <RotatePage>
              {(rp) => (
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() =>
                    rp.onRotatePage(currentPage, RotateDirection.Forward)
                  }
                  className="inline-flex items-center rounded-xl p-2 hover:bg-black/10 focus:outline-none"
                  aria-label="Rotate right"
                  title="Rotate right"
                >
                  <RotateCw className="h-5 w-5" />
                </Button>
              )}
            </RotatePage>
          </div>
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
      <div className="flex items-center rounded-t-2xl bg-[#323639] p-1 text-white">
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
        <div className="flex-1 overflow-hidden bg-[#525659] px-4">
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
