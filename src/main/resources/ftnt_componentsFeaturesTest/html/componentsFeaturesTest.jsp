<%@ taglib prefix="jcr" uri="http://www.jahia.org/tags/jcr" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="utility" uri="http://www.jahia.org/tags/utilityLib" %>
<%@ taglib prefix="template" uri="http://www.jahia.org/tags/templateLib" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%--@elvariable id="currentNode" type="org.jahia.services.content.JCRNodeWrapper"--%>
<%--@elvariable id="out" type="java.io.PrintWriter"--%>
<%--@elvariable id="script" type="org.jahia.services.render.scripting.Script"--%>
<%--@elvariable id="scriptInfo" type="java.lang.String"--%>
<%--@elvariable id="workspace" type="java.lang.String"--%>
<%--@elvariable id="renderContext" type="org.jahia.services.render.RenderContext"--%>
<%--@elvariable id="currentResource" type="org.jahia.services.render.Resource"--%>
<%--@elvariable id="url" type="org.jahia.services.render.URLGenerator"--%>

<c:if test="${renderContext.editMode}">
    <legend>${fn:escapeXml(jcr:label(currentNode.primaryNodeType, currentResource.locale))}</legend>
</c:if>


<c:set var="textInput" value="${currentNode.properties['textInput'].string}"/>
<c:set var="richTextInput" value="${currentNode.properties['richTextInput'].string}"/>
<c:set var="mediaAsset" value="${currentNode.properties['mediaAsset']}"/>
<c:set var="reportFile" value="${currentNode.properties['reportFile'].node}"/>
<c:set var="contentReference" value="${currentNode.properties['contentReference'].node}"/>
<c:set var="eventPicker" value="${currentNode.properties['eventPicker'].node}"/>
<c:set var="pageReference" value="${currentNode.properties['pageReference'].node}"/>
<c:set var="title" value="${currentNode.properties['jcr:title'].string}"/>
<c:set var="description" value="${currentNode.properties['jcr:description'].string}"/>

<h2>${title}</h2>

<h3>
    ${textInput}
</h3>

<p class="lead">
    ${richTextInput}
</p>

<a href="${linkTarget.url}">${linkText}</a>

<c:forEach items="${mediaAsset}" var="item">
    <img src="${item.node.url}" class="img-thumbnail" style="width:300px" alt="${item.node}">
</c:forEach>

<div>
    <span>References:</span>
    <ul>
        <li>Page: <a href="${pageReference.url}">${pageReference.properties['jcr:title']}</a></li>
        <li>Report: <a href="${reportFile.url}">${reportFile.properties['j:nodename']}</a></li>
        <li>Content: ${contentReference.properties['j:nodename']}</li>
        <li>Event: <a href="${eventPicker.url}">${eventPicker.properties['jcr:title']}</a></li>
    </ul>
</div>
